import React, { PropsWithChildren } from "react"
import "./Button.scss"
import clsx from "clsx"

interface IButtonProps extends PropsWithChildren {
    label: string
    onClick: () => void
    type?: 'white' | 'icon' | "black"
}

export const Button: React.FC<IButtonProps> = ({ label, onClick, type, children }) => {
    return (
        <div
            className={clsx("button text", {
                [`button_${type}`]: type
            })}
            onClick={onClick}
        >
            {label}

            {type === "icon" && children}
        </div>
    )
}