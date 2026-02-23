import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none border focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:focus-visible:ring-offset-slate-900 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "border-primary-600/80 bg-primary text-primary-foreground hover:bg-primary/90 dark:border-white/10 dark:border-slate-700 focus-visible:shadow-[0_0_15px_rgba(59,130,246,0.5)]",
        primary:
          "border-primary-600/80 bg-primary text-primary-foreground hover:bg-primary/90 dark:border-white/10 dark:hover:bg-white/5 focus-visible:shadow-[0_0_15px_rgba(59,130,246,0.5)]",
        destructive:
          "border border-destructive/80 bg-destructive text-white hover:bg-destructive/90 dark:border-destructive/60 dark:hover:bg-white/5",
        outline:
          "border border-slate-200 bg-background hover:bg-slate-50 dark:border-white/10 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:bg-white/5 dark:hover:bg-slate-800",
        secondary:
          "border border-slate-200 bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:border-white/10 dark:border-slate-700 dark:hover:bg-white/5",
        ghost:
          "border border-transparent bg-transparent hover:bg-slate-100 dark:border-white/10 dark:border-slate-700/50 dark:hover:bg-white/5",
        link: "border-transparent text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
