import { LinkCard } from "../../../../components/LinkCard/LinkCard"
import sunImg from "../../../../assets/images/sun.jpg";
import ironBoardImg from "../../../../assets/images/iron-map.jpeg";
import globe6Img from "../../../../assets/images/globe-6.jpeg";
export const SunSystem = () => {
    const SunSystemLinkInfo = [
        {
            text: "Quyoshning Tuzulishi",
            link: "/sun-system/crossword",
            img: sunImg,
        },
        {
            text: "Test",
            link: "/sun-system",
            img: ironBoardImg,
        },
        {
            text: "Javoblarni kiriting",
            link: "/sun-system",
            img: globe6Img,
        },
    ]
    return <>
        <section>
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
