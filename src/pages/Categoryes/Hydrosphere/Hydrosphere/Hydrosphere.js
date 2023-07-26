import { LinkCard } from "../../../../components/LinkCard/LinkCard"
import atlasImg from "../../../../assets/images/atlas.jpg";
import globe3Img from "../../../../assets/images/globe-3.jpeg";
import soltSeaImg from "../../../../assets/images/solt-sea.jpg";
import piaceOfContinentImg from "../../../../assets/images/piace-of-continent.jpg";
import cityMapImg from "../../../../assets/images/city-map.jpg";
import globe4Img from "../../../../assets/images/globe-4.jpg";
import "./Hydrosphere.scss"
export const Hydrosphere = () => {
    const BiosphereLinkInfo = [
        {
            text: "Gidrosfera Mosini topish",
            link: "find-suitable",
            img: atlasImg,
        },
        {
            text: "Savollar",
            link: "issues",
            img: globe3Img,
        },
        {
            text: "Gidrosfera Mosini topish",
            link: "find-hydrosphere",
            img: soltSeaImg,
        },
        {
            text: "Dengizlarni belgilang.",
            link: "sea",
            img: piaceOfContinentImg,
        },
        {
            text: "Daryolarni belgilang.",
            link: "rivers",
            img: cityMapImg,
        },
        {
            text: "Ko'llarni belgilang.",
            link: "lakes",
            img: globe4Img,
        },
    ]
    return <>
        <section className="hydrosphere-section">
            <div className="container">
                <ul className="site-link-list">
                    {BiosphereLinkInfo.map((item, i) => (
                        <li className="site-link-item" key={i}>
                            <LinkCard obj={item}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </>
}
