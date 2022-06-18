import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";


const PrimerComponente = () => {

  const [count,setCount]=useState(10);

  return (
    <div>
      <Header/>
      <h2>A plasmar lo aprendido!{count}</h2>
      <Footer/>
    </div>
  );

};

export default PrimerComponente;

