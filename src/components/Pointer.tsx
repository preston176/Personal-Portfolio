import React from 'react';

interface PointerProps {
    name?: string;
    color?: string;
}

export default function Pointer({ name = 'Preston M', color = 'bg-blue-500' }: PointerProps) {
    return (
        <div className="relative">
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
                className="feather feather-mouse-pointer text-white size-5"
            >
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                <path d="M13 13l6 6" />
            </svg>
            <div>
                <div
                    className={`inline-flex rounded-full font-bold text-sm ${color} px-2 rounded-tl-none text-white`}
                >
                    {name}
                </div>
            </div>
        </div>
    );
}