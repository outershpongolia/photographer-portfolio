import React from "react"
import "./Header.scss"
import headerImage from "../../images/header.jpg"
import { LogoIcon } from "../../icons/LogoIcon"
import { NavIcons } from "../NavIcons/NavIcons"

interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = () => {
    return (
        <div className="header">
            <img
                className="header__image"
                src={headerImage}
                alt="Woman holding camera"
            />

            <div className="header__description">
                <div className="header__title">Lucy Thomphson</div>

                <div className="header__text">Professional photographer and film maker</div>
            </div>

            <div className="header__sidebar">
                <div className="header__logo">
                    <LogoIcon />
                </div>

                <NavIcons />
            </div>
        </div>
    )
}