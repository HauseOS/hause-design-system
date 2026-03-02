'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface ModalProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Modal = React.forwardRef<
  HTMLDialogElement,
  ModalProps & React.HTMLAttributes<HTMLDivElement>
>(({ open, onOpenChange, children, ...props }, ref) => {
  const dialogRef = React.useRef<HTMLDialogElement>(null)
  React.useImperativeHandle(ref, () => dialogRef.current!)

  React.useEffect(() => {
    if (open && dialogRef.current) {
      dialogRef.current.showModal()
    } else if (!open && dialogRef.current) {
      dialogRef.current.close()
    }
  }, [open])

  return (
    <dialog
      ref={dialogRef}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onOpenChange?.(false)
        }
      }}
      className="backdrop:bg-black/50 backdrop:backdrop-blur-sm rounded-lg shadow-xl"
      {...props}
    >
      {children}
    </dialog>
  )
})
Modal.displayName = 'Modal'

const ModalTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }
>(({ children, ...props }, ref) => (
  <button ref={ref} {...props}>
    {children}
  </button>
))
ModalTrigger.displayName = 'ModalTrigger'

const ModalContent = React.forwardRef<HTMLDivElement, ModalContentProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('bg-background p-6 rounded-lg max-w-md w-full', className)}
      {...props}
    >
      {children}
    </div>
  )
)
ModalContent.displayName = 'ModalContent'

const ModalHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 text-center sm:text-left mb-4', className)}
    {...props}
  />
))
ModalHeader.displayName = 'ModalHeader'

const ModalFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-6 pt-4 border-t border-border',
      className
    )}
    {...props}
  />
))
ModalFooter.displayName = 'ModalFooter'

const ModalTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn('text-lg font-semibold leading-none tracking-tight', className)}
    {...props}
  />
))
ModalTitle.displayName = 'ModalTitle'

const ModalDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-foreground-muted', className)} {...props} />
))
ModalDescription.displayName = 'ModalDescription'

const ModalClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-background-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10',
      className
    )}
    {...props}
  >
    <span className="sr-only">Close</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M18 6l-12 12M6 6l12 12" />
    </svg>
  </button>
))
ModalClose.displayName = 'ModalClose'

export {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
  ModalClose,
}
