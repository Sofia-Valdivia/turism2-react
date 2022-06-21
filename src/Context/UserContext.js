import { createContext, useState} from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {

    const [basket,setBasket]= useState(JSON.parse(localStorage.getItem("basket")) ?? []
    );

    
    const storeBasket = (product) =>{

        product.quantity = 1;
        setBasket([...basket,product]);
        localStorage.setItem("basket",JSON.stringify([...basket,product]));
    }

    const deleteElementFromBasket = (tour_id)=> {
        const products= basket.filter((bas)=> bas.tour_id !== tour_id);
        setBasket(products);
        localStorage.setItem("basket",JSON.stringify(products));
    };

    const addOrRemoveProduct = (tour_id,add) => {
        const products = basket.map((product)=> {
            if (product.tour_id ===tour_id){
                if(add){
                    product.quantity += 1;
                } else {
                  if (product.quantity > 1){
                    product.quantity -= 1;
                  }
                }
            }
            return {
                ...product,
            };
        });
        setBasket(products);
        localStorage.setItem("basket",JSON.stringify(products));
    };


    return <UserContext.Provider value={{basket,storeBasket,deleteElementFromBasket,addOrRemoveProduct,}}>
        {props.children}</UserContext.Provider>;
};