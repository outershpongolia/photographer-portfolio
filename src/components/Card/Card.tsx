import React from "react"
import "./Card.scss"
import { noop, uniqueId } from "lodash"
import { Button } from "../Button/Button"

interface ICardProps {
    title: string
    price: number
    info: string[]
}

export const Card: React.FC<ICardProps> = ({ title, price, info }) => {
    return (
        <div className="card">
            <div className="card__header">
                <div className="card__title sub-title">{title}</div>
                <div className="sub-title">${price}</div>
            </div>

            <div className="card__description">
                {info.map(i => {
                    return (
                        <div
                            className="text"
                            key={uniqueId(i)}
                        >
                            - {i}
                        </div>
                    )
                })}
            </div>

            <Button
                label="Book"
                type="white"
                onClick={noop}
            />
        </div>
    )
}