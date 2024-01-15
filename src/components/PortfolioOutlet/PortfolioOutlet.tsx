import React from "react"
import "./PortfolioOutlet.scss"

interface IPortfolioOutletProps {
    images: string[]
}

export const PortfolioOutlet: React.FC<IPortfolioOutletProps> = ({ images }) => {
    return (
        <div className="portfolio-outlet">
            <div className="portfolio-outlet__grid">
                <img className="portfolio-outlet__image" src={images[0]} alt="" />
            </div>

            <div className="portfolio-outlet__grid portfolio-outlet__grid_four">
                <img className="portfolio-outlet__image portfolio-outlet__image_four" src={images[1]} alt="" />
                <img className="portfolio-outlet__image portfolio-outlet__image_four" src={images[2]} alt="" />
                <img className="portfolio-outlet__image portfolio-outlet__image_four" src={images[3]} alt="" />
                <img className="portfolio-outlet__image portfolio-outlet__image_four" src={images[4]} alt="" />
            </div>

            <div className="portfolio-outlet__grid">
                <img className="portfolio-outlet__image" src={images[5]} alt="" />
            </div>

            <div className="portfolio-outlet__grid portfolio-outlet__grid_two">
                <img className="portfolio-outlet__image" src={images[6]} alt="" />
                <img className="portfolio-outlet__image" src={images[7]} alt="" />
            </div>
        </div>
    )
}