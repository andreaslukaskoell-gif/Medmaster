import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
        {
          "bg-primary-700 text-white hover:bg-primary-800": variant === "primary",
          "bg-primary-100 text-primary-800 hover:bg-primary-200": variant === "secondary",
          "border border-border bg-white text-gray-700 hover:bg-gray-50": variant === "outline",
          "text-gray-600 hover:bg-gray-100 hover:text-gray-900": variant === "ghost",
          "bg-red-600 text-white hover:bg-red-700": variant === "danger",
        },
        {
          "text-sm px-3 py-1.5": size === "sm",
          "text-sm px-4 py-2": size === "md",
          "text-base px-6 py-3": size === "lg",
        },
        className
      )}
      {...props}
    />
  );
}
