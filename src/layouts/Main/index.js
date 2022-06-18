import { useContext } from "react";
import { Badge} from "@mui/material";
import { Outlet } from "react-router-dom";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import "./main.css";
import { UserContext } from "../../Context/UserContext";
import logo from "../../assets/logo.svg";


const Main = () => {
  const { basket } = useContext(UserContext);
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
              <a href="/">Inicio</a> 
            </li>
            <li className="li-nav">
              <a href="/">Nosotros</a>
            </li>
            <li className="li-nav">
              <a href="/">Tours</a>
            </li>
             <li className="li-basket" >  
            <a href="/">Basket 
            <Badge badgeContent={basket ? basket.length : 0} color="primary">
             <ShoppingCartRoundedIcon/> 
            </Badge>
            </a>
            </li>
          </ul>
        </div>
      </nav>
    
      <Outlet />
    </div>
  );
};
export default Main; 
 
 
 
 
 

            