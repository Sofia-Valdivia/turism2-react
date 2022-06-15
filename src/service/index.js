

const URL = "https://appbacktour.herokuapp.com/tour";
 
 export const getDataFromTour = async () => {
   try {
     const response = await fetch(URL);
     const data = await response.json();
     return data;
   } catch (error) {
     console.log(error.message);
   }
 };
 