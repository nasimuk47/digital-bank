import { Request, Response } from "express";

import sendSuccessResponse from "../../utils/sendSuccessResponse";
import catchAsync from "../../utils/catchAsync";
import { userService } from "./user.service";

const registerUser = catchAsync(async (req: Request, res: Response) => {
    const user = await userService.registerUser(req.body);
    console.log("User registered successfully:", user);
    sendSuccessResponse(res, user, "User registered successfully", 201);
});

export const userController = {
    registerUser,
};
