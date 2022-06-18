import { useState,useContext } from "react";
import { Button, Dialog, DialogContent } from "@mui/material";
import "./index.css";
import { UserContext } from "../../Context/UserContext";

const TourDetail = ({tours, itinerario, precio}) => {

  const {storeBasket} = useContext(UserContext);

  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => setOpen(!open);

    return (
        <div>
            
        <Button onClick={handleOpenDialog} variant="contained" color="success">
        Detalle del Tour
        </Button>
        <Dialog open={open} onClose={handleOpenDialog}>
        <DialogContent>
        <h4>Detalle del Tour</h4>        
        <h3>Itinerario: </h3>
        <p>{itinerario}</p>
        <h3>Precio: </h3>
        <p>{precio}</p>
        <p className="container-buttons">
        <Button onClick={() => 
        storeBasket(tours)        
        
        }  className="button-basket" variant="contained" color="primary">+ Add to basket</Button>
        <Button className="button-basket" onClick={handleOpenDialog} variant="contained" color="secondary">Cerrar</Button>
        </p>
        </DialogContent>
        </Dialog> 

        </div>
    );
};

export default TourDetail;