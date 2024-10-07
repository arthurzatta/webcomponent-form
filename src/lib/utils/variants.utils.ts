import { cva } from "class-variance-authority";

export const inputVariants = cva(
  [
    "flex h-10 w-full rounded-md border border-[#D0D5DD] bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground",
    "focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        error:
          "border-[#FDA29B] focus-visible:shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05),_0px_0px_0px_4px_#FEE4E2]",
        default:
          "focus-visible:border-[#ABD0E3] focus-visible:shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05),0px_0px_0px_4px_rgba(0,120,180,0.20)]",
      },
    },
  }
);
