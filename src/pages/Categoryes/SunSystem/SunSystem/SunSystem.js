import { LinkCard } from "../../../../components/LinkCard/LinkCard"
import sunImg from "../../../../assets/images/sun.jpg";
import ironBoardImg from "../../../../assets/images/iron-map.jpeg";
import globe6Img from "../../../../assets/images/globe-6.jpeg";
import "./SunSystem.scss"
export const SunSystem = () => {
    const SunSystemLinkInfo = [
        {
            text: "Quyoshning Tuzulishi",
            link: "crossword",
            img: sunImg,
        },
        {
            text: "Test",
            link: "test",
            img: ironBoardImg,
        },
        {
            text: "Javoblarni kiriting",
            link: "continue-sentence",
            img: globe6Img,
        },
    ]
    return <>
        <section className="sun-system-section">
            <div className="container">
                <ul className="site-link-list">
                    {SunSystemLinkInfo.map((item, i) => (
                        <li className="site-link-item" key={i}>
                            <LinkCard obj={item}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </>
}
