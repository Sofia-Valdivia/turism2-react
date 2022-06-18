import {Grid,TextField} from "@mui/material";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import logo from "../../assets/logo.svg";


const Carrito = () => {
    return(
        <div>
         <nav> 
            <Grid container> 
          <Grid item md={4}>            
           <img src={logo} alt=""/>
          </Grid>
          <Grid item md={4}>
            <TextField label="Tours Destacados"/>
          </Grid>
          <Grid item md={4}>
            <ul>
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="/">Nosotros</a>
                </li>
                <li>
                    <a href="/">Tours</a>
                </li>
                <li>
                    <a href="/">Login</a>
                </li>
                <li>
                    <a href="/">Basket <ShoppingCartRoundedIcon/></a>
                </li>
            </ul>
          </Grid>
          </Grid>
         </nav>
        </div>        
    );
};
export default Carrito;