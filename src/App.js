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

export const App = () => {
    return <>
        <Header/>

        <main className="site-main">
            <Routes>
                {/* MAIN PAGES  */}
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<HomeTest />} />
                {/* <Route path="/questions" element={< />} /> */}
                {/* <Route path="/combine-answers" element={< />} /> */}
                {/* <Route path="/rivers" element={< />} /> */}
                {/* <Route path="/seas" element={< />} /> */}
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
