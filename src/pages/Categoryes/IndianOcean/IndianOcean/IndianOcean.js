import React from 'react'
import { LinkCard } from '../../../../components/LinkCard/LinkCard';
import mapAndPhoto from "../../../../assets/images/map-photo.jpeg";
import planetImg from "../../../../assets/images/planet.jpg";
import cloudySkyImg from "../../../../assets/images/cloudy-sky.jpg";
import cloudySky2Img from "../../../../assets/images/cloudy-sky-2.jpg";
import globe2Img from "../../../../assets/images/globe-2.webp";
import "./IndianOcean.scss"

export const IndianOcean = () => {
    const IndianOceanLinkInfo = [
        {
            text: "Test",
            link: "test",
            img: globe2Img,
        },
        {
            text: "Hind okeani dengizlari",
            link: "sea-map",
            img: mapAndPhoto,
        },
        {
            text: "Hind okeani nomenklaturasi.",
            link: "map",
            img: planetImg,
        },
        {
            text: "Hind okeani iqlimi.",
            link: "climate",
            img: cloudySky2Img,
        },
        {
            text: "Hind okeani oqimlari.",
            link: "currents",
            img: cloudySkyImg,
        },
    ]
    return <>
        <section className='indian-ocean-section'>
            <div className="container">
                <ul className="site-link-list">
                    {IndianOceanLinkInfo.map((item, i) => (
                        <li className="site-link-item" key={i}>
                            <LinkCard obj={item}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </>
}
