'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface HauseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost"
  size?: "sm" | "md" | "lg"
  tactile?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, HauseButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      tactile = true,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      primary:
        "bg-gradient-to-r from-primary to-primary-hover text-white shadow-lg hover:shadow-xl",
      secondary:
        "bg-surface border border-border text-foreground hover:bg-surface-hover hover:border-border-hover",
      danger: "bg-error text-white hover:bg-error/90",
      ghost: "text-foreground hover:bg-surface-hover",
    }

    const sizeStyles = {
      sm: "px-3 py-1.5 text-sm min-h-9",
      md: "px-4 py-2.5 text-base min-h-11 min-w-[120px]",
      lg: "px-6 py-3.5 text-lg min-h-12 min-w-[140px]",
    }

    const tactileStyles = tactile
      ? "transition-all duration-fast hover:scale-102 active:scale-96"
      : "transition-colors duration-normal"

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium cursor-pointer user-select-none touch-action-manipulation",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
          "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background",
          variantStyles[variant],
          sizeStyles[size],
          tactileStyles,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "HauseButton"

export { Button }
