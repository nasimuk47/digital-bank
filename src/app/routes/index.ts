import { Router } from 'express';
import { userRoutes } from "../modules/user/user.route";
import { authRoutes } from "../modules/auth/auth.route";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);

export default router;
