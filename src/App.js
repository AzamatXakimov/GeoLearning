import { Route, Routes } from "react-router-dom"
import "./styles/styles.scss"
import { QuestionPage } from "./pages/Main/QuestionPage/QuestionPage"
import { Main } from "./pages/Main/Main/Main"



export const App = () => {
    return <>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/home/*" element={<QuestionPage/>}/>
        </Routes>
    </>
}
