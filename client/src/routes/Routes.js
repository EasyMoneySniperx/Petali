import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "../pages/Login";
import Calificanos from "../pages/Calificanos";
import Register from "../pages/Register";
import Inicio from "../pages/Inicio";
import Mapa from "../pages/Mapa";
import { AuthProvider } from "../context/authContext";
import { ProtectedRoute } from "../components/protectedRoute";

function App(){
    return(
        
        <BrowserRouter>
        <AuthProvider>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            
            <Route path="/mapa" element={<ProtectedRoute><Mapa/></ProtectedRoute>}/>
            <Route path="/calificanos" element={<Calificanos/>}/>  
            <Route path="/" element={<Inicio/>}/>           
        </Routes>
        </AuthProvider>
        </BrowserRouter>
      
    )
}


export default App;