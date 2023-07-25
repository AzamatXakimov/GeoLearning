import { WorldMap } from "../../../../components/WorldMap/WorldMap"

export const SouthAmericaHydrography = () => {
    const data = [
        {
            id: 1,
            position: [9.812, -71.532],
            questions: [
                {
                    question: "Tokantins daryosi",
                },
                {
                    question: "Marakaybo ko’li",
                },
                {
                    question: "Paragvay daryosi",
                },
            ],
            isAnswer: "Marakaybo ko’li",
            userAnswer: ""
        },
        {
            id: 2,
            position: [8.263463129750397, -63.27774218655933],
            questions: [
                {
                    question: "Orinoko daryosi",
                },
                {
                    question: "Ukayali irmog’i",
                },
                {
                    question: "Poopo ko’li",
                },
            ],
            isAnswer: "Orinoko daryosi",
            userAnswer: ""
        },
        {
            id: 3,
            position: [5.9676, -62.5356],
            questions: [
                {
                    question: "San-Fransisko daryosi",
                },
                {
                    question: "Anxel sharsharasi",
                },
                {
                    question: "Titikaka ko’li",
                },
            ],
            isAnswer: "Anxel sharsharasi",
            userAnswer: ""
        },
        {
            id: 4,
            position: [-0.12556562328602366, -51.05645526292009],
            questions: [
                {
                    question: "Paragvay daryosi",
                },
                {
                    question: "Ukayali irmog’i",
                },
                {
                    question: "Amazonka daryosi",
                },
            ],
            isAnswer: "Amazonka daryosi",
            userAnswer: ""
        },
        {
            id: 5,
            position: [-2.7551162616339875, -49.681448763068836],
            questions: [
                {
                    question: "Tokantins daryosi",
                },
                {
                    question: "Buenos-Ayres ko’li",
                },
                {
                    question: "Iguasu sharsharasi",
                },
            ],
            isAnswer: "Tokantins daryosi",
            userAnswer: ""
        },
        {
            id: 6,
            position: [-9.951547429065199, -37.087789052592434],
            questions: [
                {
                    question: "Parana daryosi",
                },
                {
                    question: "San-Fransisko daryosi",
                },
                {
                    question: "Paragvay daryosi",
                },
            ],
            isAnswer: "San-Fransisko daryosi",
            userAnswer: ""
        },
        {
            id: 7,
            position: [-4.4558, -73.4474],
            questions: [
                {
                    question: "Anxel sharsharasi",
                },
                {
                    question: "Tokantins daryosi",
                },
                {
                    question: "Ukayali irmog’i",
                },
            ],
            isAnswer: "Ukayali irmog’i",
            userAnswer: ""
        },
        {
            id: 8,
            position: [-15.829, -69.335],
            questions: [
                {
                    question: "Titikaka ko’li",
                },
                {
                    question: "Iguasu sharsharasi",
                },
                {
                    question: "Amazonka daryosi",
                },
            ],
            isAnswer: "Titikaka ko’li",
            userAnswer: ""
        },
        {
            id: 9,
            position: [-18.7817, -67.0248],
            questions: [
                {
                    question: "Tokantins daryosi",
                },
                {
                    question: "Poopo ko’li",
                },
                {
                    question: "Buenos-Ayres ko’li",
                },
            ],
            isAnswer: "Poopo ko’li",
            userAnswer: ""
        },
        {
            id: 10,
            position: [-27.2899, -58.6073],
            questions: [
                {
                    question: "Tokantins daryosi",
                },
                {
                    question: "Paragvay daryosi",
                },
                {
                    question: "Anxel sharsharasi",
                },
            ],
            isAnswer: "Paragvay daryosi",
            userAnswer: ""
        },
        {
            id: 11,
            position: [-25.694, -54.4379],
            questions: [
                {
                    question: "Ukayali irmog’i",
                },
                {
                    question: "Iguasu sharsharasi",
                },
                {
                    question: "Orinoko daryosi",
                },
            ],
            isAnswer: "Iguasu sharsharasi",
            userAnswer: ""
        },
        {
            id: 12,
            position: [-33.107009846419245, -58.38048673260001],
            questions: [
                {
                    question: "Marakaybo ko’li",
                },
                {
                    question: "Parana daryosi",
                },
                {
                    question: "Chimboroso tog’i",
                },
            ],
            isAnswer: "Parana daryosi",
            userAnswer: ""
        },
        {
            id: 13,
            position: [-46.4653, -71.6336],
            questions: [
                {
                    question: "Amazonka daryosi",
                },
                {
                    question: "Buenos-Ayres ko’li",
                },
                {
                    question: "San-Fransisko daryosi",
                },
            ],
            isAnswer: "Buenos-Ayres ko’li",
            userAnswer: ""
        },
    ]
    return <>
        <section>
            <div className="container">
                <WorldMap mobileSize={430} mobileZoom={2} mobileCenter={[-15.631644966296449, -56.982702790478875]} desktopZoom={3} desktopCenter={[-15.631644966296449, -56.982702790478875]} data={data}/>
            </div>
        </section>
    </>
}

