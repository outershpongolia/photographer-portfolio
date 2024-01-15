import React, { useCallback } from 'react'
import "./Dot.scss"
import clsx from 'clsx'

interface IDotProps {
    currentDot: number
    isActive: boolean
    onClick: (currentDot: number) => void
}

export const Dot: React.FC<IDotProps> = ({ currentDot, isActive, onClick }) => {
    const handleOnClick = useCallback(() => {
        onClick(currentDot)
    }, [onClick, currentDot])
    
    return (
        <div
            className={clsx("dot", {
                ["dot_active"]: isActive
            })}
            onClick={handleOnClick}
        />
    )
}