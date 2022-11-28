import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Dashboard from "../pages/Register";

function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Register/>}/>
        </Routes>
        </BrowserRouter>
    )
}


export default App;