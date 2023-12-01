"use client"

import { X } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
    PopoverClose,
} from "@/components/ui/popover";
import { useAction } from "@/hooks/use-action";
import { Button } from "@/components/ui/button";
import { createBoard } from "@/actions/create-board";

import { FormInput } from "./form-input";
import { FormSubmit } from "./form-submit";
import { FieldErrors } from '../../lib/create-safe-action';

interface FormPopoverProps {
    children: React.ReactNode;
    side?: "left" | "right" | "top" | "bottom";
    align?: "start" | "center" | "end";
    sideOffset?: number;
};

export const FormPopover = ({
    children,
    side = "bottom",
    align,
    sideOffset = 0,
}: FormPopoverProps) => {
    const { execute, fieldErrors } = useAction(createBoard, {
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.log(error);
        }
    });

    const onSubmit = (formdata: FormData) => {
        const title = formdata.get("title") as string;
        const image = formdata.get("image") as string;
        execute({ title, image });
    }
}