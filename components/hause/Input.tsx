'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex w-full rounded-md border border-border bg-surface px-4 py-2.5 text-base text-foreground transition-all duration-normal",
        "placeholder:text-foreground-muted/50",
        "focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "min-h-11",
        className
      )}
      ref={ref}
      {...props}
    />
  )
)

Input.displayName = "HauseInput"

export { Input }
