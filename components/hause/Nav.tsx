import * as React from 'react'
import { cn } from '@/lib/utils'

interface NavProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

const Nav = React.forwardRef<HTMLElement, NavProps>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      className={cn('flex items-center space-x-4', className)}
      {...props}
    />
  )
)
Nav.displayName = 'Nav'

interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean
}

const NavItem = React.forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ className, isActive, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        'px-3 py-2 rounded-md text-sm font-medium transition-colors',
        isActive
          ? 'bg-primary text-primary-foreground'
          : 'text-foreground-muted hover:text-foreground hover:bg-background-hover',
        className
      )}
      {...props}
    />
  )
)
NavItem.displayName = 'NavItem'

export { Nav, NavItem }
