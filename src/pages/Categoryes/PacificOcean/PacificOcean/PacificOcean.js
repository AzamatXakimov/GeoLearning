import { LinkCard } from "../../../../components/LinkCard/LinkCard";
import globe2Img from "../../../../assets/images/globe-2.webp";
import mapOnBoardImg from "../../../../assets/images/map-on-board.jpeg";
import seaarchMapImg from "../../../../assets/images/search-in-map.jpeg";
import "./PacificOcean.scss"

export const PacificOcean = () => {
    const PacificOceanLinkInfo = [
        {
            text: "Tinch okeani savollar",
            link: "continue-sentence",
            img: seaarchMapImg,
        },
        {
            text: "Tinch Okeani Testlari",
            link: "test",
            img: mapOnBoardImg,
        },
        {
            text: "Tinch okeani",
            link: "combine-answers",
            img: globe2Img,
        },
    ]
    return <>
        <section className="pacific-ocean-section">
            <div className="container">
                <ul className="site-link-list">
                    {PacificOceanLinkInfo.map((item, i) => (
                        <li className="site-link-item" key={i}>
                            <LinkCard obj={item}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </>
}
