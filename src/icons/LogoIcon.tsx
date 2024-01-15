import React from "react"

interface ILogoIconProps {}

export const LogoIcon: React.FC<ILogoIconProps> = () => {
    return (
        <svg width="54" height="52" viewBox="0 0 54 52" fill="none">
            <rect x="6.5" y="5.90222" width="41" height="40" stroke="black" strokeWidth="3"/>
            <line x1="1.71094" y1="7.0968" x2="1.71094" y2="1.00002" stroke="black" strokeWidth="2"/>
            <line x1="1" y1="1.40222" x2="7.5" y2="1.40222" stroke="black" strokeWidth="2"/>
            <line x1="52.3555" y1="44.6666" x2="52.3555" y2="50.7634" stroke="black" strokeWidth="2"/>
            <line x1="47" y1="50.4022" x2="53.4" y2="50.4022" stroke="black" strokeWidth="2"/>
            <path d="M22.9307 36.0028V38.4022H15.4146V36.0028H22.9307ZM16.4092 23.4725V38.4022H13.333V23.4725H16.4092Z" fill="black"/>
            <path d="M38.0083 11.4725V26.4022H34.9424V11.4725H38.0083ZM42.6021 11.4725V13.8822H30.4204V11.4725H42.6021Z" fill="black"/>
        </svg>
    )
}