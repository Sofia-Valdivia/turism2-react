import {Grid,TextField} from "@mui/material";
//import { Link, Outlet } from "react-router-dom";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import "./main.css";
import logo from "../../assets/logo.svg";

const Reserva = () => {
  return (
    <div>
      <nav className="main-nav">
        <div>
        <img className="img-nav" height={80}
        width={80} src={logo} alt=""/>
       
        </div>
        <div>
          <ul className="ul-nav">
            <li className="li-nav">
              <Link to="/">Inicio</Link>
            </li>
            <li className="li-nav">
              <Link to="/">Nosotros</Link>
            </li>
            <li className="li-nav">
              <Link to="/">Tours</Link>
            </li>
             <li className="li-nav" >  
            <Link to="/">Basket</Link> <ShoppingCartRoundedIcon/>
            </li>
          </ul>
        </div>
      </nav>
    
      <Outlet />
    </div>
  );
};
export default Reserva; 
 
 
 
 
 

            