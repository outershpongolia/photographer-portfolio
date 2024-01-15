import React from "react"
import "./Blog.scss"
import { Button } from "../../components/Button/Button"
import { noop, uniqueId } from "lodash"
import { FaArrowRight } from "react-icons/fa6";
import { blogs } from "../../constants";
import { BlogItem } from "../../components/BlogItem/BlogItem";

interface IBlogProps {}

export const Blog: React.FC<IBlogProps> = () => {
    return (
        <div className="blog">
            <div className="blog__wrapper page-wrapper">
                <div className="title">Blog</div>

                <div className="blog__items">
                    {blogs.map((blog, index) => {
                        return (
                            <BlogItem
                                key={uniqueId(blog.title)}
                                image={blog.image}
                                title={blog.title}
                                date={blog.date}
                                reversed={(index + 1) % 2 === 0}
                            />
                        )
                    })}
                </div>

                <div className="blog__buttons">
                    <Button label="Read more" type="icon" onClick={noop}>
                        <FaArrowRight />
                    </Button>

                    <Button label="Subscribe" type="white" onClick={noop} />
                </div>
            </div>
        </div>
    )
}