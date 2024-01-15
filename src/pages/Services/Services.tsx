import React from "react"
import "./Services.scss"
import { serviceCards } from "../../constants"
import { Card } from "../../components/Card/Card"
import { uniqueId } from "lodash"

interface IServicesProps {}

export const Services: React.FC<IServicesProps> = () => {
    return (
        <div className="services">
            <div className="page-wrapper">
                <div className="services__title title">Services</div>

                <div className="services__cards">
                    {serviceCards.map(card => {
                        return (
                            <Card
                                key={uniqueId(card.title)}
                                title={card.title}
                                price={card.price}
                                info={card.descriprion}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}