import { LinkCard } from "../../../../components/LinkCard/LinkCard";
import stormImg from "../../../../assets/images/atmosphere-storm.jpeg"
import sunnySkyImg from "../../../../assets/images/atmosphere-sunny.webp"
import nightSkyImg from "../../../../assets/images/atmosphere-night.jpeg"
import cloudyImg from "../../../../assets/images/atmosphere-cloudy.jpeg"
import bluSkyImg from "../../../../assets/images/atmosphere-blue-sky.webp";
import "./Atmosphere.scss"

export const Atmosphere = () => {
    const atmosphereLinkInfo = [
        {
            text: "Atmosfera Test",
            link: "test",
            img: stormImg,
        },
        {
            text: "Atmosfera Krossvord",
            link: "crossword",
            img: sunnySkyImg,
        },
        {
            text: "Atmosfera Savollar",
            link: "continue-sentence",
            img: nightSkyImg,
        },
        {
            text: "Atmosfera to`g`ri va No To`gri",
            link: "true-false",
            img: cloudyImg,
        },
        {
            text: "Atmosfera Savollar",
            link: "issues",
            img: bluSkyImg,
        },
        {
            text: "Javoblarni birlashtirng",
            link: "combine-answers",
            img: stormImg,
        },
    ]
    return <>
        <section className="atmosphere-section">
            <div className="container">
                <ul className="site-link-list">
                    {atmosphereLinkInfo.map((item, i) => (
                        <li className="site-link-item" key={i}>
                            <LinkCard obj={item}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </>
}
