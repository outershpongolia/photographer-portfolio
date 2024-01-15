import React, { useCallback, useState } from "react"
import "./Footer.scss"
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import { NavIcons } from "../NavIcons/NavIcons"
import { DEFAULT_INPUT_DATA, pages } from "../../constants"
import { Link } from "../Link/Link"
import { noop } from "lodash"

interface IFooterProps {}

export const Footer: React.FC<IFooterProps> = () => {
    const [ inputData, setInputData ] = useState(DEFAULT_INPUT_DATA)

    const handleChangeInput = useCallback((name: string, value: string) => {
        setInputData(inputData => {
            return {
                ...inputData,
                [name]: value
            }
        })
    }, [setInputData])

    const handleSubmitForm = useCallback(() => {
        // save data to context

        setInputData(DEFAULT_INPUT_DATA)
    }, [setInputData])

    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer__wrapper footer__text-wrapper">
                    <div className="title">Contact</div>
                    <div className="text">
                        For all pricing and booking inquires please fill out the form 
                        bellow or contact me on any of my social media profiles.
                    </div>
                </div>

                <div className="footer__wrapper footer__input-wrapper">
                    <Input
                        placeholder="Name"
                        name="name"
                        value={inputData.name || ""}
                        onChange={handleChangeInput}
                    />
                    <Input
                        placeholder="Email"
                        name="email"
                        value={inputData.email || ""}
                        onChange={handleChangeInput}
                    />
                    <Input
                        placeholder="Inquiry"
                        name="inquiry"
                        value={inputData.inquiry || ""}
                        onChange={handleChangeInput}
                        isTextArea
                    />
                </div>

                <Button
                    label="Send"
                    type="black"
                    onClick={handleSubmitForm}
                />
            </div>

            <div className="footer__menu">
                <div className="footer__links">
                    {pages.map(page => {
                        return (
                            <Link
                                label={page}
                                onClick={noop}
                            />
                        )
                    })}
                </div>

                <NavIcons horizontal />
            </div>
        </div>
    )
}