import { LinkCard } from "../../../../components/LinkCard/LinkCard";
import atlasImg from "../../../../assets/images/atlas.jpg";
import pieceOfContinentImg from "../../../../assets/images/piace-of-continent.jpg";
import soltSeasImg from "../../../../assets/images/solt-sea.jpg";
import globe3Img from "../../../../assets/images/globe-3.jpeg";
import "./ArcticOcean.scss"
export const ArcticOcean = () => {
    const PacificOceanLinkInfo = [
        {
            text: "Test",
            link: "test",
            img: atlasImg,
        },
        {
            text: "Oqimlar",
            link: "currents",
            img: globe3Img,
        },
        {
            text: "Gidrosfera Mosini topish",
            link: "continue-sentence",
            img: soltSeasImg,
        },
        {
            text: "Dengizlarni belgilang.",
            link: "/seas",
            img: pieceOfContinentImg,
        },
    ]
    return <>
        <section className="arctic-ocean-section">
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
