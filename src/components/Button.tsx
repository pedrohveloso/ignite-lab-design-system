import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'py-3 px-4 bg-violet-700 rounded font-semibold text-gray-100 text-sm w-full transition-colors hover:bg-violet-500 hover:text-black focus:ring-2 ring-white',
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}