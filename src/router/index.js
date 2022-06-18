
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from"../pages/Home"
import Main from "../layouts/Main";


const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
         <Route element={<Main/>}>   
            <Route path="/" element={<Home/>}/>
        </Route>   
        </Routes>
        </BrowserRouter>
    )
}

export default Router;