import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "../utils/cn.util";

export type TextInputProps = InputHTMLAttributes<HTMLInputElement>;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, ...props }, ref) => (
    <input {...props} ref={ref} className={cn(className)} />
  )
);
