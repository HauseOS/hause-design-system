'use client'

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20",
        secondary:
          "border border-foreground-muted/30 bg-foreground-muted/10 text-foreground-muted hover:bg-foreground-muted/20",
        success:
          "border border-success/30 bg-success/10 text-success hover:bg-success/20",
        warning:
          "border border-warning/30 bg-warning/10 text-warning hover:bg-warning/20",
        error:
          "border border-error/30 bg-error/10 text-error hover:bg-error/20",
        destructive:
          "border border-destructive/30 bg-destructive/10 text-destructive hover:bg-destructive/20",
        outline: "border border-border text-foreground hover:bg-surface",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
