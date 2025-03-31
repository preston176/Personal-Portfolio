import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

const Card = ({ className, children }: PropsWithChildren<{ className?: string }>) => {
    return (
        <article
            className={twMerge("bg-gray-800 rounded-3xl overflow-hidden shadow-lg p-6 border border-white/40", className)}

        >
            {children}
        </article>
    )
}

export default Card