import React from "react"
import "./Reviews.scss"
import { Slider } from "../../components/Slider/Slider"
import { reviews } from "../../constants"

interface IReviewsProps {}

export const Reviews: React.FC<IReviewsProps> = () => {
    return (
        <div className="reviews">
            <div className="reviews__wrapper page-wrapper">
                <div className="title">Reviews</div>

                <Slider
                    reviews={reviews}
                />
            </div>
        </div>
    )
}