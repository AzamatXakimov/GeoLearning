import { Route, Routes } from "react-router-dom"
import "./styles/styles.scss"
import { Header } from "./components/Hader/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Main/Home/Home";
import { HomeTest } from "./pages/Main/HomeTest/HomeTest";
import { Azimuth } from "./pages/Categoryes/Azimuth/Azimuth/Azimuth";
import { AzimuthTest } from "./pages/Categoryes/Azimuth/AzimuthTest/AzimuthTest";
import { Africa } from "./pages/Categoryes/Africa/Africa/Africa";
import { AfriceMountains } from "./pages/Categoryes/Africa/AfriceMountains/AfriceMountains";
import { Seas } from "./pages/Main/Seas/Seas";
import { CombineAnswers } from "./pages/Main/CombineAnswers/CombineAnswers";
import { AfricaLiveZones } from "./pages/Categoryes/Africa/AfricaLiveZones/AfricaLiveZones";
import { AustralianClimate } from "./pages/Main/AustralianClimate/AustralianClimate";
import { AfricaHydrography } from "./pages/Categoryes/Africa/AfricaHydrography/AfricaHydrography";
import { AfricaMap } from "./pages/Categoryes/Africa/AfricaMap/AfricaMap";
import { AntarcticaNomenclature } from "./pages/Categoryes/Antarctica/AntarcticaNomenclature/AntarcticaNomenclature";
import { AntarcticaSeaMap } from "./pages/Categoryes/Antarctica/AntarcticaSeaMap/AntarcticaSeaMap";
import { AntarcticaAnswerSeparate } from "./pages/Categoryes/Antarctica/AntarcticaAnswerSeparate/AntarcticaAnswerSeparate";
import { AtmosphereTrueFalse } from "./pages/Categoryes/Atmosphere/AtmosphereTrueFalse/AtmosphereTrueFalse";
import { AtmosphereCombineAnswers } from "./pages/Categoryes/Atmosphere/AtmosphereCombineAnswers/AtmosphereCombineAnswers";
import { Antarctica } from "./pages/Categoryes/Antarctica/Antarctica/Antarctica";
import { Atmosphere } from "./pages/Categoryes/Atmosphere/Atmosphere/Atmosphere";
import { IndianOcean } from "./pages/Categoryes/IndianOcean/IndianOcean/IndianOcean";
import { IndianOceanMap } from "./pages/Main/IndianOceanMap/IndianOceanMap";
import { IndianOceanSea } from "./pages/Categoryes/IndianOcean/IndianOceanSea/IndianOceanSea";
import { IndianOceanClimate } from "./pages/Categoryes/IndianOcean/IndianOceanClimate/IndianOceanClimate";
import { IndianOceanCurrents } from "./pages/Categoryes/IndianOcean/IndianOceanCurrents/IndianOceanCurrents";
import { Biosphere } from "./pages/Categoryes/Biosphere/Biosphere/Biosphere";
import { BiosphereCombineAnswers } from "./pages/Categoryes/Biosphere/BiosphereCombineAnswers/BiosphereCombineAnswers";
import { Hydrosphere } from "./pages/Categoryes/Hydrosphere/Hydrosphere/Hydrosphere";
import { HydrosphereRivers } from "./pages/Categoryes/Hydrosphere/HydrosphereRivers/HydrosphereRivers";
import { HydrosphereLakes } from "./pages/Categoryes/Hydrosphere/HydrosphereLakes/HydrosphereLakes";
import { HydrosphereFindAnswer } from "./pages/Categoryes/Hydrosphere/HydrosphereFindAnswer/HydrosphereFindAnswer";
import { HydrosphereFindSuitable } from "./pages/Categoryes/Hydrosphere/HydrosphereFindSuitable/HydrosphereFindSuitable";
import { Universe } from "./pages/Categoryes/Universe/Universe/Universe";
import { EuroAsia } from "./pages/Categoryes/EuroAsia/EuroAsia/EuroAsia";
import { EuroAsiaNomeclature } from "./pages/Categoryes/EuroAsia/EuroAsiaNomeclature/EuroAsiaNomeclature";
import { EuroAsiaRivers } from "./pages/Categoryes/EuroAsia/EuroAsiaRivers/EuroAsiaRivers";
import { EuroAsiaMountains } from "./pages/Categoryes/EuroAsia/EuroAsiaMountains/EuroAsiaMountains";
import { NorthAmerica } from "./pages/Categoryes/NorthAmerica/NorthAmerica/NorthAmerica";
import { NorthAmericaNomeclature } from "./pages/Categoryes/NorthAmerica/NorthAmericaNomeclature/NorthAmericaNomeclature";
import { NorthAmericaHydrography } from "./pages/Categoryes/NorthAmerica/NorthAmericaHydrography/NorthAmericaHydrography";
import { NorthAmericaIslands } from "./pages/Categoryes/NorthAmerica/NorthAmericaIslands/NorthAmericaIslands";
import { SouthAmerica } from "./pages/Categoryes/SouthAmerica/SouthAmerica/SouthAmerica";
import { SouthAmericaNomeclature } from "./pages/Categoryes/SouthAmerica/SouthAmericaNomeclature/SouthAmericaNomeclature";
import { SouthAmericaHydrography } from "./pages/Categoryes/SouthAmerica/SouthAmericaHydrography/SouthAmericaHydrography";
import { PacificOcean } from "./pages/Categoryes/PacificOcean/PacificOcean/PacificOcean";
import { PacificOceanCombineAnswers } from "./pages/Categoryes/PacificOcean/PacificOceanCombineAnswers/PacificOceanCombineAnswers";
import { ArcticOcean } from "./pages/Categoryes/ArcticOcean/ArcticOcean/ArcticOcean";
import { ArcticOceanCurrents } from "./pages/Categoryes/ArcticOcean/ArcticOceanCurrents/ArcticOceanCurrents";
import { Australia } from "./pages/Categoryes/Australia/Australia/Australia";
import { AustraliaMap } from "./pages/Categoryes/Australia/AustraliaMap/AustraliaMap";
import { AustraliaClimate } from "./pages/Categoryes/Australia/AustraliaClimate/AustraliaClimate";
import { Atlantic } from "./pages/Categoryes/Atlantic/Atlantic/Atlantic";
import { AtlanticMap } from "./pages/Categoryes/Atlantic/AtlanticMap/AtlanticMap";
import { AtlanticAdaptation } from "./pages/Categoryes/Atlantic/AtlanticAdaptation/AtlanticAdaptation";
import { AtlanticCurrents } from "./pages/Categoryes/Atlantic/AtlanticCurrents/AtlanticCurrents";
import { AtlanticNatureZones } from "./pages/Categoryes/Atlantic/AtlanticNatureZones/AtlanticNatureZones";
import { SunSystem } from "./pages/Categoryes/SunSystem/SunSystem/SunSystem";
import { AtmosphereCrossword } from "./pages/Categoryes/Atmosphere/AtmosphereCrossword/AtmosphereCrossword";
import { UniverseCrossword } from "./pages/Categoryes/Universe/UniverseCrossword/UniverseCrossword";
import { AustraliaCrossword } from "./pages/Categoryes/Australia/AustraliaCrossword/AustraliaCrossword";
import { SunSystemCrossword } from "./pages/Categoryes/SunSystem/SunSystemCrossword/SunSystemCrossword";
import { PacificOceanContinue } from "./pages/Categoryes/PacificOcean/PacificOceanContinue/PacificOceanContinue";


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
                <Route path="/australian-climate" element={<AustralianClimate />} />
                    {/* MAP  */}
                <Route path="/indian-ocean/map" element={<IndianOceanMap />} />

                
                {/* CATEGORYES PAGES  */}

                {/* AZIMUT  */}
                <Route path="/azimuth" element={<Azimuth />}/>
                <Route path="/azimuth/test" element={<AzimuthTest />}/>

                {/* AFRICA  */}
                <Route path="/africa" element={<Africa />}/>
                    {/* MAP  */}
                <Route path="/africa/map" element={<AfricaMap />}/>
                    {/* MAP  */}
                <Route path="/africa/hydrography" element={<AfricaHydrography />}/>
                    {/* MAP  */}
                <Route path="/africa/mountains" element={<AfriceMountains />}/>
                <Route path="/africa/live-zone" element={<AfricaLiveZones />}/>

                {/* Antarctica */}
                <Route path="/antarctica" element={<Antarctica />}/>
                    {/* MAP  */}
                <Route path="/antarctica/nomenclature" element={<AntarcticaNomenclature />}/>
                    {/* MAP  */}
                <Route path="/antarctica/sea-map" element={<AntarcticaSeaMap />}/>
                <Route path="/antarctica/answer-separate" element={<AntarcticaAnswerSeparate />}/>


                {/* Atmosphere */}
                <Route path="/atmosphere" element={<Atmosphere />}/>
                <Route path="/atmosphere/true-false" element={<AtmosphereTrueFalse />}/>
                <Route path="/atmosphere/combine-answers" element={<AtmosphereCombineAnswers />}/>
                <Route path="/atmosphere/crossword" element={<AtmosphereCrossword />}/>


                {/* Euro Asia */}
                <Route path="/euro-asia" element={<EuroAsia />}/>
                    {/* MAP  */}
                <Route path="/euro-asia/nomenclature" element={<EuroAsiaNomeclature />}/>
                    {/* MAP  */}
                <Route path="/euro-asia/rivers" element={<EuroAsiaRivers />}/>
                    {/* MAP  */}
                <Route path="/euro-asia/mountains" element={<EuroAsiaMountains />}/>


                {/* North America */}
                <Route path="/north-america" element={<NorthAmerica />}/>
                    {/* MAP  */}
                <Route path="/north-america/nomenclature" element={<NorthAmericaNomeclature />}/>
                    {/* MAP  */}
                <Route path="/north-america/hydrography" element={<NorthAmericaHydrography />}/>
                    {/* MAP  */}
                <Route path="/north-america/islands" element={<NorthAmericaIslands />}/>

                
                {/* South America */}
                <Route path="/south-america" element={<SouthAmerica />}/>
                    {/* MAP  */}
                <Route path="/south-america/nomenclature" element={<SouthAmericaNomeclature />}/>
                    {/* MAP  */}
                <Route path="/south-america/hydrography" element={<SouthAmericaHydrography />}/>


                {/* Pacific Ocean */}
                <Route path="/pacific-ocean" element={<PacificOcean />}/>
                <Route path="/pacific-ocean/combine-answers" element={<PacificOceanCombineAnswers />}/>
                <Route path="/pacific-ocean/continue-sentence" element={<PacificOceanContinue />}/>


                {/* Arctic Ocean */}
                <Route path="/arctic-ocean" element={<ArcticOcean />}/>
                <Route path="/arctic-ocean/currents" element={<ArcticOceanCurrents />}/>


                {/* Indian Ocean */}
                <Route path="/indian-ocean" element={<IndianOcean />}/>
                    {/* MAP  */}
                <Route path="/indian-ocean/sea-map" element={<IndianOceanSea />}/>
                <Route path="/indian-ocean/climate" element={<IndianOceanClimate />}/>
                <Route path="/indian-ocean/currents" element={<IndianOceanCurrents />}/>


                {/* Biosphere */}
                <Route path="/biosphere" element={<Biosphere />}/>
                <Route path="/biosphere/combine-answers" element={<BiosphereCombineAnswers />}/>


                {/* Hydrosphere */}
                <Route path="/hydrosphere" element={<Hydrosphere />}/>
                <Route path="/hydrosphere/rivers" element={<HydrosphereRivers />}/>
                <Route path="/hydrosphere/lakes" element={<HydrosphereLakes />}/>
                <Route path="/hydrosphere/find-hydrosphere" element={<HydrosphereFindAnswer />}/>
                <Route path="/hydrosphere/find-suitable" element={<HydrosphereFindSuitable />}/>
                    {/* MAP  */}
                <Route path="/hydrosphere/sea" element={<Seas />}/>


                {/* Universe */}
                <Route path="/universe" element={<Universe />}/>
                    {/* MAP  */}
                <Route path="/universe/combine-pictures" element={<AtmosphereCombineAnswers />}/>
                <Route path="/universe/crossword" element={<UniverseCrossword />}/>


                {/* Oceans */}


                {/* Australia */}
                <Route path="/australia" element={<Australia />}/>
                    {/* MAP  */}
                <Route path="/australia/map" element={<AustraliaMap />}/>
                <Route path="/australia/climate" element={<AustraliaClimate />}/>
                <Route path="/australia/crossword" element={<AustraliaCrossword />}/>


                {/* Atlantic ocean*/}
                <Route path="/atlantic" element={<Atlantic />}/>
                    {/* MAP  */}
                <Route path="/atlantic/map" element={<AtlanticMap />}/>
                <Route path="/atlantic/adaptation" element={<AtlanticAdaptation />}/>
                <Route path="/atlantic/currents" element={<AtlanticCurrents />}/>
                <Route path="/atlantic/nature-zones" element={<AtlanticNatureZones />}/>



                {/* Solar system */}
                <Route path="/sun-system" element={<SunSystem />}/>
                <Route path="/sun-system/crossword" element={<SunSystemCrossword />}/>




                {/* DEPARTMENTS PAGES */}


            </Routes>
        </main>

        <Footer/>
    </>
}
