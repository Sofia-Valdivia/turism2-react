import { createContext, useState} from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {

    const [basket,setBasket]= useState(JSON.parse(localStorage.getItem("basket")) ?? []
    );

    
    const storeBasket = (product) =>{
        setBasket([...basket,product]);
        localStorage.setItem("basket",JSON.stringify([...basket,product]));
    }

    const deleteElementFromBasket = (tour_id)=> {
        const products= basket.filter((bas)=> bas.tour_id !== tour_id);
        setBasket(products);
        localStorage.setItem("basket",JSON.stringify(products));
    };


    return <UserContext.Provider value={{basket,storeBasket,deleteElementFromBasket}}>
        {props.children}</UserContext.Provider>;
};