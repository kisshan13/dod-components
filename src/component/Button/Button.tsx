import React from "react"
import { cva, VariantProps } from "cva"

const buttonStyles = cva([' px-4 py-2 rounded-[4px] hover:shadow-sm disabled:bg-none disabled:opacity-80 disabled:hover:opacity-80'], {
    variants: {
        variant: {
            primary: [' bg-blue-600 bg-opacity-80 hover:bg-opacity-100 text-white disabled:opacity-80 disabled:hover:opacity-80'],
            secondary: ['border border-solid border-black border-opacity-25 hover:border-opacity-40 text-blue-600']
        },
    },

    defaultVariants: {
        variant: "primary"
    }
})

type DodButtonStyles = VariantProps<typeof buttonStyles>

interface DodButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: `${NonNullable<DodButtonStyles['variant']>}`,
    className?: string
}

export default function Button({ children, variant, className, ...props }: DodButtonProps) {
    return <button className={buttonStyles({ variant, className })} {...props}>
        {children}
    </button>
}