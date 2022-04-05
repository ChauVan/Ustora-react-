import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Checkout from "./Checkout";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";

export default  function RouterPage () {
    return (
        <div>  
        <BrowserRouter>
         <Routes>
                 <Route path="/" element = {<Home />} />
                <Route path="shop/*" element= {<Shop />} />
                <Route path="Checkout/*" element= {<Checkout/>} />
                <Route path="SingleProduct/*" element= {<SingleProduct/>} />
                <Route path="Cart/*" element= {<Cart/>} />


         </Routes>      
        </BrowserRouter>
        </div>
    )
}