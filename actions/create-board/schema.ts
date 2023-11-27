import { z } from "zod";

export const CreateBoard = z.object({
    title: z.string({
        required_error: "Please enter a title",
        invalid_type_error: "Please enter a valid title",
    }).min(3,{
        message: "Title must be at least 3 characters long"
    }),
    image:z.string({
        required_error: "Please enter a image",
        invalid_type_error: "Please enter a valid image",
    })
})