import { LinkCard } from "../../../components/LinkCard/LinkCard";
import "./Home.scss";
import mapAndPhoto from "../../../assets/images/map-photo.jpeg";
import questionsImg from "../../../assets/images/questions.jpeg";
import skyImg  from "../../../assets/images/sky-1.jpeg";
import riversImg from "../../../assets/images/rivers.jpg";
import cloudySkyImg from "../../../assets/images/cloudy-sky.jpg";
import stormSkyImg from "../../../assets/images/storm-sky.webp";
import planetImg from "../../../assets/images/planet.jpg";
export const Home = () => {
    const homeLinksInfo = [
        {
            text: "Test",
            link: "/test",
            img: mapAndPhoto,
        },
        {
            text: "Savollar",
            link: "/questions",
            img: questionsImg,
        },
        {
            text: "Javoblarni birlashtiring",
            link: "/combine-answers",
            img: skyImg,
        },
        {
            text: "Daryolar",
            link: "/rivers",
            img: riversImg,
        },
        {
            text: "Dengizlar",
            link: "/seas",
            img: mapAndPhoto,
        },
        {
            text: "Azimut masalalar",
            link: "/azimuth-issues",
            img: cloudySkyImg,
        },
        {
            text: "Avstralia iqlimi",
            link: "/australian-climate",
            img: stormSkyImg,
        },
        {
            text: "Hind okeani nomenklaturasi",
            link: "/indian-ocean/map",
            img: planetImg,
        },
    ]

    return <>
        <section className="site-home-tasks">
            <div className="container">
                <ul className="site-home-tasks-list">
                    {homeLinksInfo.map((item, i) => (
                        <li className="site-home-tasks-item" key={i}>
                            <LinkCard obj={item}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </>
}
