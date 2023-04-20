import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { StonePage } from "../pages/StonePage";
export function MyRoutes(){
    return(<Router>
        <Routes>
            <Route exact path="/" element={<LandingPage></LandingPage>}/>
            <Route exact path="/stone" element={<StonePage></StonePage>}></Route>
           
        </Routes>

    </Router>)
}