import { forwardRef, SelectHTMLAttributes } from "react";
import { cn } from "../utils/cn.util";

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, ...props }, ref) => (
    <select {...props} ref={ref} className={cn(className)} />
  )
);

export type OptionProps = SelectHTMLAttributes<HTMLOptionElement>;

export const Option = forwardRef<HTMLOptionElement, OptionProps>(
  (props, ref) => <option {...props} ref={ref} />
);
