import React from "react";

import Header from "./Header"
import Home from "./home/Home"
import Customize from "./customize/Customize";
import Cart from "./cart/Cart"
import Login from "./login/Login"
import Menu from "./menu/Menu"
import Route from "../Route"



const App = ()=>{
   
    return(
        <div>
        <Header />
        <Route path="/">
            <Home  />
        </Route>
        <Route path="/menu">
            <Menu />
        </Route>
        <Route path="/customize">
            <Customize/>
        </Route>
        <Route path="/cart">
            <Cart />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
    </div>
    )
}

export default App