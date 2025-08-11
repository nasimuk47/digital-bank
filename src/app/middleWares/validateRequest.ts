import { NextFunction, Request, Response } from "express";
import { ZodObject, ZodRawShape } from "zod";
import catchAsync from "../utils/catchAsync";

const validateRequest = (schema: ZodObject<ZodRawShape>) => {
    return catchAsync(
        async (req: Request, res: Response, next: NextFunction) => {
            console.log(
                req.body,
                "request body in validateRequest middleware------------------------"
            );
            if (req.body.data) {
                await schema.parseAsync(req.body.data);
            } else {
                await schema.parseAsync(req.body);
            }

            // await schema.parseAsync(req.body);

            next();
        }
    );
};

export default validateRequest;
