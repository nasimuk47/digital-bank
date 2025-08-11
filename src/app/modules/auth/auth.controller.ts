import catchAsync from "../../utils/catchAsync";
import sendSuccessResponse from "../../utils/sendSuccessResponse";
import { authService } from "./auth.service";

const login = catchAsync(async (req, res) => {
    const { accessToken, refreshToken } = await authService.login(req.body);

    res.cookie("accessToken", accessToken);
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
    });
    const data = {
        accessToken,
        refreshToken,
    };
    sendSuccessResponse(res, data, "User logged in successfully");
});

export const authController = {
    login,
};
