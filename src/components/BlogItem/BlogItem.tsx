import React from "react"
import "./BlogItem.scss"
import clsx from "clsx"
import { noop } from "lodash"

interface IBlogItemProps {
    image: string
    title: string
    date: string
    reversed?: boolean
}

export const BlogItem: React.FC<IBlogItemProps> = ({ image, title, date, reversed }) => {
    return (
        <div className={clsx("blog-item", {
            ["blog-item_reversed"]: reversed
        })}>
            <div className="blog-item__image-wrapper">
                <img className="blog-item__image" src={image} alt="" />
            </div>

            <div
                className="blog-item__content"
                onClick={noop}
            >
                <div className="big-text">{title}</div>

                <div className="text">{date}</div>
            </div>
        </div>
    )
}