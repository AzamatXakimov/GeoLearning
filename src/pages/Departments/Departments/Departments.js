import { LinkCard } from "../../../components/LinkCard/LinkCard";
import eBookImg from "../../../assets/images/e-book.jpg"
import textInformationImg from "../../../assets/images/text-information.jpg"
import AnnotatedDictionaryImg from "../../../assets/images/Annotated-dictionary.jpg"
import presentationsImg from "../../../assets/images/presentations.webp";
import "./Departments.scss"

export const Departments = () => {
    const departmentsLinks = [
        {
            text: "Elektron kutubxona",
            link: "/departments/e-books",
            img: eBookImg,
        },
        {
            text: "Taqdimotlar",
            link: "/departments/presentations",
            img: presentationsImg,
        },
        {
            text: "Matnli malumotlar",
            link: "/departments/text-information",
            img: textInformationImg,
        },
        {
            text: "Izohli lug'at",
            link: "/departments/annotated-dictionary",
            img: AnnotatedDictionaryImg,
        },
    ]
    return <>
        <section className="departments-section">
            <div className="container">
                <ul className="site-home-tasks-list">
                    {departmentsLinks.map((item, index) => {
                    return (
                        <li className="site-home-tasks-item" key={index}>
                            <LinkCard obj={item} />
                        </li>
                    );
                    })}
                </ul>
            </div>
        </section>
    </>
}
