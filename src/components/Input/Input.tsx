import React, { useCallback } from "react"
import "./Input.scss"

interface IInputProps {
    name: string
    value: string
    onChange: (name: string, value: string) => void
    placeholder?: string
    isTextArea?: boolean
}

export const Input: React.FC<IInputProps> = ({ name, value, onChange, placeholder, isTextArea }) => {
    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange(e.target.name, e.target.value)
    }, [onChange])

    return (
        <>
            {isTextArea
                ? <textarea
                    className="input textarea"
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={handleOnChange}
                />
                : <input
                    className="input"
                    type="text"
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={handleOnChange}
                />
            }
        </>
    )
}