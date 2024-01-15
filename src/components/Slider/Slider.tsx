import React, { useCallback, useEffect, useRef, useState } from "react"
import "./Slider.scss"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IReview } from "../../interfaces";
import { uniqueId } from "lodash";
import clsx from "clsx";
import { Dot } from "./Dot/Dot";

interface ISliderProps {
    reviews: IReview[]
}

const NUMBER_OF_DOTS = [1, 2, 3, 4, 5]

export const Slider: React.FC<ISliderProps> = ({ reviews }) => {
    const [ currentSlide, setCurrentSlide ] = useState(1)
    const [ sliderWidths, setSliderWidths ] = useState({
        slide: 0,
        wrapper: 0
    })

    const sliderRef = useRef<HTMLDivElement>(null)
    const slideRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!sliderRef.current) return

        const elementWidth = sliderRef.current.clientWidth

        setSliderWidths({slide: elementWidth, wrapper: elementWidth * reviews.length})
    }, [setSliderWidths, reviews])

    const handleMoveSliderToRight = useCallback(() => {
        setCurrentSlide(currentSlide => {
            if (currentSlide === reviews.length) return currentSlide

            return currentSlide + 1
        })
    }, [reviews.length])

    const handleMoveSliderToLeft = useCallback(() => {
        setCurrentSlide(currentSlide => {
            if (currentSlide === 1) return currentSlide

            return currentSlide - 1
        })
    }, [reviews.length])

    const handleMoveSliderWithDot = useCallback((currentDot: number) => {
        setCurrentSlide(currentDot)
    }, [setCurrentSlide])

    return (
        <div className="slider" ref={sliderRef}>
            <div
                ref={slideRef}
                className="slider__wrapper"
                style={{
                    marginLeft: `-${(currentSlide - 1) * sliderWidths.slide}px`,
                    width: `${sliderWidths.wrapper}px`
                }}
            >
                {reviews.map(review => {
                    return (
                        <div
                            key={uniqueId(review.review)}
                            className="slider__slide"
                            style={{width: `${sliderWidths.slide}px`}}
                        >
                            <img className="slider__image" src={review.image} alt="" />

                            <div className="slider__review text">"{review.review}"</div>

                            <div className="sub-title">{review.reviewer}</div>
                        </div>
                    )
                })}
            </div>

            <FaArrowLeft
                className={clsx("slider__arrow slider__arrow_left", {
                    ["slider__arrow_left_disabled"]: currentSlide === 1
                })}
                onClick={handleMoveSliderToLeft}
            />

            <FaArrowRight
                className={clsx("slider__arrow slider__arrow_right", {
                    ["slider__arrow_right_disabled"]: currentSlide === reviews.length
                })}
                onClick={handleMoveSliderToRight}
            />

            <div className="slider__dots">
                {NUMBER_OF_DOTS.map(dot => {
                    return (
                        <Dot
                            key={uniqueId(dot.toString())}
                            currentDot={dot}
                            isActive={dot === currentSlide}
                            onClick={handleMoveSliderWithDot}
                        />
                    )
                })}
            </div>
        </div>
    )
}