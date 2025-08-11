import { z } from "zod";


const registerValidationSchema = z.object({
    name: z.string().min(1, "Name is required."),
    email: z.string().email("Invalid email address").optional(),
    phone: z.string().regex(/^\+?[0-9]{10,15}$/, "Invalid phone number").optional(),
    password: z.string().min(6, "Password must be at least 6 characters."),
    role: z.string().optional(),
}).refine((data) => data.email || data.phone, {
    message: "Either email or phone is required.",
    path: ["email", "phone"],
});

export const userValidationSchema = {
    registerValidationSchema,
};
