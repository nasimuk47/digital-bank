import { Router } from "express";

import { userController } from "./user.controller";
import validateRequest from "../../middleWares/validateRequest";
import { userValidationSchema } from "./user.validation";


const router = Router();

router.post(
	"/register",
	validateRequest(userValidationSchema.registerValidationSchema),
	userController.registerUser
);

export const userRoutes = router;
