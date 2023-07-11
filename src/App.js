import { Route, Routes } from "react-router-dom"
import "./styles/styles.scss"
import { Header } from "./components/Hader/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Main/Home/Home";
import { IndianOcean } from "./pages/Main/IndianOcean/IndianOcean";
import { HomeTest } from "./pages/Main/HomeTest/HomeTest";
import { Azimuth } from "./pages/Categoryes/Azimuth/Azimuth/Azimuth";
import { AzimuthTest } from "./pages/Categoryes/Azimuth/AzimuthTest/AzimuthTest";
import { Africa } from "./pages/Categoryes/Africa/Africa/Africa";
import { AfriceMountains } from "./pages/Categoryes/Africa/AfriceMountains/AfriceMountains";
import { Seas } from "./pages/Main/Seas/Seas";
import { CombineAnswers } from "./pages/Main/CombineAnswers/CombineAnswers";
import { AfricaLiveZones } from "./pages/Categoryes/Africa/AfricaLiveZones/AfricaLiveZones";


export const App = () => {
    return <>
        <Header/>

        <main className="site-main">
            <Routes>
                {/* MAIN PAGES  */}
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<HomeTest />} />
                {/* <Route path="/questions" element={< />} /> */}
                <Route path="/combine-answers" element={<CombineAnswers />} />
                {/* <Route path="/rivers" element={< />} /> */}
                <Route path="/seas" element={<Seas />} />
                {/* <Route path="/azimuth-issues" element={< />} /> */}
                {/* <Route path="/australian-climate" element={< />} /> */}
                <Route path="/indian-ocean" element={<IndianOcean />} />

                
                {/* CATEGORYES PAGES  */}

                {/* AZIMUT  */}
                <Route path="/azimuth" element={<Azimuth/>}/>
                <Route path="/azimuth/test" element={<AzimuthTest/>}/>

                {/* AFRICA  */}
                <Route path="/africa" element={<Africa/>}/>
                <Route path="/africa/mountains" element={<AfriceMountains/>}/>
                <Route path="/africa/live-zone" element={<AfricaLiveZones/>}/>

                {/* Antarctica */}


                {/* Atmosphere */}


                {/* Euro Asia */}


                {/* North America */}

                
                {/* South America */}


                {/* Pacific Ocean */}


                {/* Arctic Ocean */}


                {/* Indian Ocean */}


                {/* Biosphere */}


                {/* Hydrosphere */}


                {/* Universe */}


                {/* Oceans */}


                {/* Australia */}


                {/* Atlantic */}


                {/* The ocean */}


                {/* Solar system */}




                {/* DEPARTMENTS PAGES */}


            </Routes>
        </main>

        <Footer/>
    </>
}
