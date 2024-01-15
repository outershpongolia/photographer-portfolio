import React from "react"
import "./NavIcons.scss"
import { RiFacebookBoxFill, RiInstagramFill } from "react-icons/ri"
import { IoLogoBehance } from "react-icons/io5"
import clsx from "clsx"

interface INavIconsProps {
    horizontal?: boolean
}

export const NavIcons: React.FC<INavIconsProps> = ({ horizontal }) => {
    return (
        <div className={clsx("nav-icons", {
            ["nav-icons_horizontal"]: horizontal
        })}>
            <div className="nav-icons__line" />

            <RiFacebookBoxFill className="nav-icons__icon" />
            <RiInstagramFill className="nav-icons__icon" />
            <IoLogoBehance className="nav-icons__icon" />

            <div className="nav-icons__line" />
        </div>
    )
}