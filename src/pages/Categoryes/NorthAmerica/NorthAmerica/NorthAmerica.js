import React from 'react'
import { LinkCard } from '../../../../components/LinkCard/LinkCard';
import testPointImg from "../../../../assets/images/test-points.jpg";
import cartoonMap2Img from "../../../../assets/images/cartoon-map-2.jpg";
import soltSeaImg from "../../../../assets/images/solt-sea.jpg";
import earlyIslandImg from "../../../../assets/images/early-island.jpg";
import "./NorthAmerica.scss"

export const NorthAmerica = () => {
    const NorthAmericaLinkInfo = [
        {
            text: "Test",
            link: "test",
            img: testPointImg,
        },
        {
            text: "Shimoliy Amerika Nomeklaturasi",
            link: "nomenclature",
            img: cartoonMap2Img,
        },
        {
            text: "Shimoliy Amerika Gidrografiyasi",
            link: "hydrography",
            img: soltSeaImg,
        },
        {
            text: "Shimoliy Amerika Orollari",
            link: "islands",
            img: earlyIslandImg,
        },
    ]
    return <>
        <section className='north-america-section'>
            <div className="container">
                <ul className="site-link-list">
                    {NorthAmericaLinkInfo.map((item, i) => (
                        <li className="site-link-item" key={i}>
                            <LinkCard obj={item}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </>
}
