import { useState } from "react";
import { Button, Dialog, DialogContent } from "@mui/material";

const TourDetail = (props) => {
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
        <p>{props.itinerario}</p>
        <h3>Precio: </h3>
        <p>{props.precio}</p>
        <Button onClick={handleOpenDialog}>Cerrar</Button>
        </DialogContent>
        </Dialog> 

        </div>
    );
};

export default TourDetail;