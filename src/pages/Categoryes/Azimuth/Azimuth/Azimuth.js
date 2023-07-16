import { LinkCard } from "../../../../components/LinkCard/LinkCard"
import globe2Img from "../../../../assets/images/globe-2.webp";
import mapAndPhoto from "../../../../assets/images/map-photo.jpeg";
export const Azimuth = () => {
    const azimutLinkInfo = [
        {
            text: "Azimut Test",
            link: "/azimuth/test",
            img: globe2Img,
        },
        {
            text: "Azimut Masalalar",
            link: "/azimuth/test",
            img: mapAndPhoto,
        },
    ]
    return <>
        <section>
            <div className="container">
                <ul className="site-link-list">
                    {azimutLinkInfo.map((item, i) => (
                        <li className="site-link-item" key={i}>
                            <LinkCard obj={item}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </>
}
