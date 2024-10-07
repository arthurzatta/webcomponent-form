import { forwardRef, LabelHTMLAttributes } from "react";
import { cn } from "../utils/cn.util";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      {...props}
      ref={ref}
      className={cn(className, "text-left text-black")}
    />
  )
);
