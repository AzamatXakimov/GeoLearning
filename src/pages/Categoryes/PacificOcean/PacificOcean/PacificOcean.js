import { LinkCard } from "../../../../components/LinkCard/LinkCard";
import globe2Img from "../../../../assets/images/globe-2.webp";
import mapOnBoardImg from "../../../../assets/images/map-on-board.jpeg";
import seaarchMapImg from "../../../../assets/images/search-in-map.jpeg";

export const PacificOcean = () => {
    const PacificOceanLinkInfo = [
        {
            text: "Tinch okeani savollar",
            link: "/pacific-ocean",
            img: seaarchMapImg,
        },
        {
            text: "Tinch Okeani Testlari",
            link: "/pacific-ocean",
            img: mapOnBoardImg,
        },
        {
            text: "Tinch okeani",
            link: "/pacific-ocean/combine-answers",
            img: globe2Img,
        },
    ]
    return <>
        <section>
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
