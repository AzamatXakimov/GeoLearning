import { LinkCard } from "../../../../components/LinkCard/LinkCard";
import stormImg from "../../../../assets/images/atmosphere-storm.jpeg"
import sunnySkyImg from "../../../../assets/images/atmosphere-sunny.webp"
import nightSkyImg from "../../../../assets/images/atmosphere-night.jpeg"
import cloudyImg from "../../../../assets/images/atmosphere-cloudy.jpeg"
import bluSkyImg from "../../../../assets/images/atmosphere-blue-sky.webp"

export const Atmosphere = () => {
    const atmosphereLinkInfo = [
        {
            text: "Atmosfera Test",
            link: "/atmosphere",
            img: stormImg,
        },
        {
            text: "Atmosfera Krossvord",
            link: "/atmosphere/crossword",
            img: sunnySkyImg,
        },
        {
            text: "Atmosfera Savollar",
            link: "/atmosphere",
            img: nightSkyImg,
        },
        {
            text: "Atmosfera to`g`ri va No To`gri",
            link: "/atmosphere/true-false",
            img: cloudyImg,
        },
        {
            text: "Atmosfera Savollar",
            link: "/atmosphere",
            img: bluSkyImg,
        },
        {
            text: "Javoblarni birlashtirng",
            link: "/atmosphere/combine-answers",
            img: stormImg,
        },
    ]
    return <>
        <section>
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
