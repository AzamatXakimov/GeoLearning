import { LinkCard } from "../../../../components/LinkCard/LinkCard"
import globe2Img from "../../../../assets/images/globe-2.webp";
import mapAndPhoto from "../../../../assets/images/map-photo.jpeg";
import questionsImg from "../../../../assets/images/questions.jpeg";
import plantsImg from "../../../../assets/images/africa-plants.jpeg";
import mountainsImg from "../../../../assets/images/africa-mountains.jpeg";
import "./Africa.scss"

export const Africa = () => {
    const africaLinkInfo = [
        {
            text: "Afrika Xarita",
            link: "map",
            img: globe2Img,
        },
        {
            text: "Afrika Materigi gidrografiyasi.",
            link: "hydrography",
            img: mapAndPhoto,
        },
        {
            text: "Afrika Materigi tog`lari.",
            link: "mountains",
            img: mountainsImg,
        },
        {
            text: "Afrika Materigi savollar. ",
            link: "issues",
            img: questionsImg,
        },
        {
            text: "Afrika Materigi tabiat zonalari",
            link: "live-zone",
            img: plantsImg,
        },
    ]
    return <>
        <section className="africa-section">
            <div className="container">
                <ul className="site-link-list">
                    {africaLinkInfo.map((item, i) => (
                        <li className="site-link-item" key={i}>
                            <LinkCard obj={item}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </>
}
