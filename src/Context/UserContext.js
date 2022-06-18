import { createContext, useState} from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {

    const [basket,setBasket]= useState(JSON.parse(localStorage.getItem("basket")) ?? []
    );

    const storeBasket = (product) => {
        const dataToStorage = [...basket,product];
        setBasket( dataToStorage);
           

        localStorage.setItem("basket", JSON.stringify(dataToStorage));
    };




    return <UserContext.Provider value={{basket,storeBasket}}>
        {props.children}</UserContext.Provider>;
};