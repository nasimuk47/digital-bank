import { z } from "zod";

const loginValidationSchema = z.object({
    email: z.string().min(1, "Id is required.").email("Invalid email address"),
    password: z.string().min(1, "Password is required"),
});

export const authValidationSchema = {
    loginValidationSchema,
};
