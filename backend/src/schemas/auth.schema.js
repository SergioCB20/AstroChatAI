import { z } from "zod";

export const registerSchema = z.object({
    username: z.string({
        required_error: "Username must be a string",
    }),
    password: z.string({
        required_error: "Password must be a string",
    }).min(6,{
        message: "Password must be at least 6 characters long",
    }),
    avatar: z.string({
        required_error: "Avatar must be a string",
    })
})

export const loginSchema = z.object({
    username: z.string({
        required_error: "Username must be a string",
    }),
    password: z.string({
        required_error: "Password must be a string",
    }).min(6,{
        message: "Password must be at least 6 characters long",
    })
})

