import React from "react"
import "./Link.scss"

interface ILinkProps {
    label: string
    onClick: () => void
}

export const Link: React.FC<ILinkProps> = ({ label, onClick }) => {
    return (
        <div
            className="link"
            onClick={onClick}
        >
            {label}
        </div>
    )
}