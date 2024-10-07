import { forwardRef } from "react";
import { cn } from "../utils/cn.util";

export const Button = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    {...props}
    ref={ref}
    className={cn(
      "bg-[#9061f9] text-white rounded-md p-3 md:self-end md:w-32",
      className
    )}
  />
));
