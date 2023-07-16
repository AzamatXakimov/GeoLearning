import { LinkCard } from "../../../../components/LinkCard/LinkCard";
import mapAndPhoto from "../../../../assets/images/map-photo.jpeg";
import globe2Img from "../../../../assets/images/globe-2.webp";
export const Biosphere = () => {
    const BiosphereLinkInfo = [
        {
            text: "Biosfer Test",
            link: "/biosphere",
            img: globe2Img,
        },
        {
            text: "Javoblarni birlashtiring",
            link: "/biosphere/combine-answers",
            img: mapAndPhoto,
        },
    ]
    return <>
        <section>
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
