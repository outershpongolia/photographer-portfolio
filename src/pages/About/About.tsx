import React from "react"
import "./About.scss"
import image1 from "../../images/portfolio-image2.jpg"
import image2 from "../../images/portfolio-image3.jpg"

interface IAboutProps {}

export const About: React.FC<IAboutProps> = () => {
    return (
        <div className="about">
            <div className="about__wrapper">
                <div className="about__text-wrapper">
                    <div className="about__text title">About me</div>

                    <div className="about__text text">
                        I am a fashion and editorial photographer so as filmmaker
                        based in New York, with a passion for visual storytelling.
                        I tell stories through visual lenses, capture emotions and
                        keep them in life forever.
                    </div>

                    <div className="about__text text">
                        I appreciate the raw reality of everyday life, the fleeting beauty 
                        of those in-between moments, and I do my very best to take 
                        every picture with that in mind. I want my viewers to relate to 
                        my photographs through recognition of and familiarity with the
                        situations, the emotions, and the energy so much that they wonder
                        if they are looking at a picture of someone they know.
                    </div>
                </div>

                <img className="about__image about__image_small" src={image1} alt="" />
                <img className="about__image about__image_big" src={image2} alt="" />
            </div>
        </div>
    )
}