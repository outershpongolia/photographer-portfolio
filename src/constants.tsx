import image1 from "./images/portfolio-image.jpg"
import image2 from "./images/portfolio-image2.jpg"
import image3 from "./images/portfolio-image3.jpg"
import image4 from "./images/portfolio-image4.jpg"
import image5 from "./images/portfolio-image5.jpg"
import image6 from "./images/portfolio-image6.jpg"
import image7 from "./images/portfolio-image7.jpg"
import image8 from "./images/portfolio-image8.jpg"
import { IBlog, ICard, IReview } from "./interfaces"

export const portfolioTabs = ["brands", "people", "film", "fashion"]

export const portfolioImages = [
    {
        name: "people",
        images: [image1, image2, image3, image4, image5, image6, image7, image8]
    }
]

export const serviceCards: ICard[] = [
    {
        title: "Silver Package",
        price: 800,
        descriprion: ["Shooting for 4 hours", "Number of photos 100 - 150", "Photos will be available in 5 days", "Consultation on style"]
    },
    {
        title: "Gold Package",
        price: 1000,
        descriprion: ["Shooting for 5 hours", "Number of photos 150 - 200", "Photos will be available in 2 days", "Consultation on style"]
    },
    {
        title: "Bronze Package",
        price: 500,
        descriprion: ["Shooting for 3 hours", "Number of photos 50 - 70", "Photos will be available in 7 days", "Consultation on style"]
    }
]

export const reviews: IReview[] = [
    {
        image: image1,
        review: "If you are looking to work with someone who is professional yet very supportive Lucy is the person for you! She guided me through the whole photoshoot and gave me some of the best advices I have ever received from a photographer! What a memorable day!",
        reviewer: "Juliana, @julianafash95"
    },
    {
        image: image2,
        review: "Sve extra!",
        reviewer: "Mark, @mark"
    },
    {
        image: image3,
        review: "The best person ever...",
        reviewer: "Mina, @helloworld"
    },
    {
        image: image4,
        review: "She guided me through the whole photoshoot and gave me some of the best advices I have ever received from a photographer! What a memorable day!",
        reviewer: "unknown"
    },
    {
        image: image5,
        review: "Shooting for 4 hours, photos will be available in 5 days.",
        reviewer: "Dado, @polovnismoki"
    }
]

export const blogs: IBlog[] = [
    {
        image: image7,
        title: "Why I Do It: Passion That Drives My Work",
        date: "March 25, 2020"
    },
    {
        image: image8,
        title: "Going back to the roots?!",
        date: "March 3, 2020"
    },
    {
        image: image6,
        title: "The Future of Photography",
        date: "February 15, 2020"
    }
]

export const DEFAULT_INPUT_DATA = {
    name: "",
    email: "",
    inquiry: ""
}

export const pages = ["Portfolio", "Services", "About me", "Reviews", "Blog", "Contact"]