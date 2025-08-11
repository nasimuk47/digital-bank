import { Router } from "express";
import { authController } from "./auth.controller";
import validateRequest from "../../middleWares/validateRequest";
import { authValidationSchema } from "./auth.validation";

const router = Router();

router.post(
    "/login",
    validateRequest(authValidationSchema.loginValidationSchema),
    authController.login
);

export const authRoutes = router;
