import { useEffect, useState,useContext } from "react";
import {Container, Card, CardContent, CardMedia, Grid, Button} from "@mui/material";
import { getDataFromTour } from "../../service";
import TourDetail from "../../components/TourDetail";
import { UserContext } from "../../Context/UserContext";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';


const Home = () => {   
     
    const {basket, storeBasket,deleteElementFromBasket} = useContext(UserContext);

    const [tours,setTours] = useState([]);

    const fetchTourList = async () => {
        const ListTours = await getDataFromTour();

        console.log("listTours.content", ListTours.content);
        setTours(ListTours.content);

    };

    const ButtonForProduct = ({ tours })=> {
    const findProduct = basket.find((bas)=> bas.tour_id === tours.tour_id);
  
      return (
        <>
        { findProduct ? (
            <Button
            onClick={()=> deleteElementFromBasket(tours.tour_id)}
            className="button-basket" 
            variant="contained" 
            color="error">Delete<DeleteForeverRoundedIcon/>
            </Button>
          ) : (
            <Button 
            onClick={() => 
            storeBasket(tours)         
            } 
            className="button-basket" 
            variant="contained" 
            color="primary">+ Add to basket</Button>
          )}
        </>
      );
    };
  

    useEffect(()=>{
        fetchTourList();
    },[]);    

    return(
        <Container>
          <h1>Tours</h1>
          <Grid container spacing={3}> 
          {tours.length > 0 &&
            tours.map((tours)=>(
             <Grid item md={6} lg={6} sm={12} xs={12}> 
              <Card className="card-tour">                
                <CardMedia                
                component ="img" 
                className = "img-tour"
                image={tours.tour_foto}
                />
                <CardContent className="center">
                <h2>{tours.tour_nombre}</h2> 
               <p>
               <ButtonForProduct tours={tours}/>
            </p> 

                <TourDetail
                 itinerario={tours.tour_itinerario} 
                 precio={tours.tour_precio} 
                 tours= {tours}                
                 />
                
                </CardContent>
              </Card>
             </Grid>
            ))}
          </Grid>    
        </Container>
    );
};

export default Home;