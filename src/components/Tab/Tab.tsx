import React, { useCallback } from "react"
import "./Tab.scss"
import clsx from "clsx"

interface ITabProps {
    name: string
    onClick: (name: string) => void
    isActive: boolean
}

export const Tab: React.FC<ITabProps> = ({ name, onClick, isActive }) => {
    const handleOnClick = useCallback(() => {
        onClick(name)
    }, [onClick, name])

    return (
        <div
            className={clsx("tab text", {
                ["tab_active"]: isActive
            })}
            onClick={handleOnClick}
        >
            {name}
        </div>
    )
}