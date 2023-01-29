import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Inicio from "../pages/Inicio";
import Mapa from "../pages/Mapa";

function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/mapa" element={<Mapa/>}/>
            <Route path="/" element={<Inicio/>}/>           
        </Routes>
        </BrowserRouter>
    )
}


export default App;