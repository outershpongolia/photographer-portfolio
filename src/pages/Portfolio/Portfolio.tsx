import React, { useCallback, useState } from "react"
import "./Portfolio.scss"
import { portfolioImages, portfolioTabs } from "../../constants"
import { Tab } from "../../components/Tab/Tab"
import { uniqueId } from "lodash"
import { PortfolioOutlet } from "../../components/PortfolioOutlet/PortfolioOutlet"

interface IPortfolioProps {}

export const Portfolio: React.FC<IPortfolioProps> = () => {
    const [ currentTab, setCurrentTab ] = useState(portfolioTabs[1])

    const handleChangeTab = useCallback((name: string) => {
        setCurrentTab(name)
    }, [setCurrentTab])

    return (
        <div className="portfolio">
            <div className="page-wrapper">
                {/* TABS */}
                <div className="portfolio__header">
                    <div className="title">Portfolio</div>

                    <div className="portfolio__tabs">
                        {portfolioTabs.map(tab => {
                            return (
                                <Tab
                                    key={uniqueId(tab)}
                                    name={tab}
                                    onClick={handleChangeTab}
                                    isActive={currentTab === tab}
                                />
                            )
                        })}
                    </div>
                </div>

                {/* OUTLET */}
                {portfolioImages.map(portfolio => {
                    if (portfolio.name !== currentTab) return <PortfolioOutlet key={uniqueId(portfolio.name)} images={[]} />

                    return (
                        <PortfolioOutlet key={uniqueId(portfolio.name)} images={portfolio.images} />
                    )
                })}
            </div>
        </div>
    )
}