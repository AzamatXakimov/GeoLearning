import { LinkCard } from "../../../../components/LinkCard/LinkCard"
import globe2Img from "../../../../assets/images/globe-2.webp";
import questionsImg from "../../../../assets/images/questions.jpeg";
import globeImg from "../../../../assets/images/globe.jpeg"
import seaImg from "../../../../assets/images/antarctica-sea.jpg"
import "./Antarctica.scss"

export const Antarctica = () => {
    const africaLinkInfo = [
        {
            text: "Antarktida Test",
            link: "test",
            img: globe2Img,
        },
        // {
        //     text: "Antarktida organik dunyosi.",
        //     link: "/antarctica",
        //     img: mapAndPhoto,
        // },
        {
            text: "Antarktida materigi nomenklaturasi",
            link: "nomenclature",
            img: globeImg,
        },
        {
            text: "Antarktida tog`ri xatoga ajratish.",
            link: "answer-separate",
            img: questionsImg,
        },
        {
            text: "Antarktida materigi atrofidagi dengizlarni belgilang",
            link: "sea-map",
            img: seaImg,
        },
    ]
    return <>
        <section className="antarctica-section">
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
