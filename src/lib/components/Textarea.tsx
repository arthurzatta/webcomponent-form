import { forwardRef, TextareaHTMLAttributes } from "react";
import { cn } from "../utils/cn.util";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      {...props}
      ref={ref}
      className={cn(className, "h-32 resize-none")}
    />
  )
);
