import { WorldMap } from "../../../../components/WorldMap/WorldMap"

export const HydrosphereRivers = () => {
    const data = [
        {
            id: 1,
            position: [33.10686794865942, -91.15435645052078],
            questions: [
                {
                    question: "Missisipi",
                },
                {
                    question: "Mekong",
                },
                {
                    question: "Dunay",
                },
            ],
            isAnswer: "Missisipi",
            userAnswer: "",
        },
        {
            id: 2,
            position: [-0.1739896186922333, -51.07870705808336],
            questions: [
                {
                    question: "Lena",
                },
                {
                    question: "Amazonka",
                },
                {
                    question: "Yanszi",
                },
            ],
            isAnswer: "Amazonka",
            userAnswer: "",
        },
        {
            id: 3,
            position: [-33.19020524122997, -58.38664066738243],
            questions: [
                {
                    question: "Ob",
                },
                {
                    question: "Parana",
                },
                {
                    question: "Murrey",
                },
            ],
            isAnswer: "Parana",
            userAnswer: "",
        },
        {
            id: 4,
            position: [44, 35],
            questions: [
                {
                    question: "Qora dengiz",
                },
                {
                    question: "Appenin yarim oroli",
                },
                {
                    question: "Kaspiy dengizi",
                },
            ],
            isAnswer: "Qora dengiz",
            userAnswer: "",
        },
        {
            id: 5,
            position: [-1.5712675262950737, 16.672863131820314],
            questions: [
                {
                    question: "Sirdaryo",
                },
                {
                    question: "Hind",
                },
                {
                    question: "Kongo",
                },
            ],
            isAnswer: "Kongo",
            userAnswer: "",
        },
        {
            id: 6,
            position: [30.70478669468614, 30.774411166568107],
            questions: [
                {
                    question: "Amur",
                },
                {
                    question: "Nil",
                },
                {
                    question: "Mekong",
                },
            ],
            isAnswer: "Nil",
            userAnswer: "",
        },
        {
            id: 7,
            position: [45.2942756312661, 28.433779740685274],
            questions: [
                {
                    question: "Dunay",
                },
                {
                    question: "Lena",
                },
                {
                    question: "Amazonka",
                },
            ],
            isAnswer: "Dunay",
            userAnswer: "",
        },
        {
            id: 8,
            position: [66.533889, 71.394722],
            questions: [
                {
                    question: "Yanszi",
                },
                {
                    question: "Nil",
                },
                {
                    question: "Ob",
                },
            ],
            isAnswer: "Ob",
            userAnswer: "",
        },
        {
            id: 9,
            position: [72.4087, 126.6847],
            questions: [
                {
                    question: "Parana",
                },
                {
                    question: "Lena",
                },
                {
                    question: "Hind",
                },
            ],
            isAnswer: "Lena",
            userAnswer: "",
        },
        {
            id: 10,
            position: [52.9911, 141.0467],
            questions: [
                {
                    question: "Amur",
                },
                {
                    question: "Kongo",
                },
                {
                    question: "Mekong",
                },
            ],
            isAnswer: "Amur",
            userAnswer: "",
        },
        // {
        //     id: 11,
        //     position: [33.444167, 90.936111],
        //     questions: [
        //         {
        //             question: "Murrey",
        //         },
        //         {
        //             question: "Dunay",
        //         },
        //         {
        //             question: "Yanszi",
        //         },
        //     ],
        //     isAnswer: "Yanszi",
        //     userAnswer: "",
        // },
        {
            id: 12,
            position: [46.02518316775662, 61.055349652706475],
            questions: [
                {
                    question: "Amur",
                },
                {
                    question: "Sirdaryo",
                },
                {
                    question: "Murrey",
                },
            ],
            isAnswer: "Sirdaryo",
            userAnswer: "",
        },
        {
            id: 13,
            position: [11.357457561451627, 105.26023294297619],
            questions: [
                {
                    question: "Mekong",
                },
                {
                    question: "Murrey",
                },
                {
                    question: "Hind",
                },
            ],
            isAnswer: "Mekong",
            userAnswer: "",
        },
        {
            id: 14,
            position: [-35.5586, 138.8799],
            questions: [
                {
                    question: "Niger",
                },
                {
                    question: "Dunay",
                },
                {
                    question: "Murrey",
                },
            ],
            isAnswer: "Murrey",
            userAnswer: "",
        },
        {
            id: 14,
            position: [5.322222, 6.469167],
            questions: [
                {
                    question: "Lena",
                },
                {
                    question: "Niger",
                },
                {
                    question: "Hind",
                },
            ],
            isAnswer: "Niger",
            userAnswer: "",
        },
    ]
    return <>
        <section>
            <div className="container">
                <WorldMap mobileSize={768} mobileZoom={1.5} mobileCenter={[0, 40]} desktopZoom={2} desktopCenter={[0, 0]} data={data}/>
            </div>
        </section>
    </>
}
