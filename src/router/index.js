
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from"../pages/Home"
import Main from "../layouts/Main";
import BasketView from "../pages/BasketView";


const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
        <Route element={<Main/>}>   
        <Route path="/" element={<Home/>}/>
        <Route path="main/basket" element={<BasketView/>}/>
        </Route>   
        </Routes>
        </BrowserRouter>
    )
}

export default Router;