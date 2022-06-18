import { useEffect, useState } from "react";
import {Container, Card, CardContent, CardMedia, Grid, Button} from "@mui/material";
import { getDataFromTour } from "../../service";
import TourDetail from "../../components/TourDetail";


const Home = () => {

   
      

    const [tours,setTours] = useState([]);

    const fetchTourList = async () => {
        const ListTours = await getDataFromTour();

        console.log("listTours.content", ListTours.content);
        setTours(ListTours.content);

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