import { findUserByEmail } from "../../services/prisma.service";
import AppError from "../../errors/AppError";
import { processPassword } from "../../utils/passwordHash";
import { jwtToken } from "../../utils/jwtToken";

const login = async (payload: { email: string; password: string }) => {
    const user = await findUserByEmail(payload.email);

    if (!user) {
        throw new AppError(404, "User not found");
    }

    const plainPassword = payload.password;
    const hashedPassword = user.password;

    const isPasswordMatched = await processPassword.comparePassword(
        plainPassword,
        hashedPassword as string
    );

    if (!isPasswordMatched) throw new AppError(404, "Invalid password");

    const jwtPayload = {
        userId: user.id,
        role: user.role,
        email: user.email,
        iat: Math.floor(Date.now() / 1000),
    };

    const accessToken = jwtToken.createToken(
        jwtPayload,
        process.env.JWT_ACCESS_SECRET as string,
        process.env.JWT_ACCESS_EXPIRY as string
    );

    const refreshToken = jwtToken.createToken(
        jwtPayload,
        process.env.JWT_REFRESH_SECRET as string,
        process.env.JWT_REFRESH_EXPIRY as string
    );

    return {
        accessToken,
        refreshToken,
    };
};

export const authService = {
    login,
};
