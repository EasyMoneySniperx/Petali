import React from "react";
import "tailwindcss/tailwind.css";
//import "../assets/css/Carta.css"
import { Marker, Popup } from "react-leaflet";
import { LocationIcon } from "./IconLocation";

const Markers = (props) => {
    const { parques } = props;
//3.45412 (latitud), -76.525633 (longitud)

    ////const res = "locahost:4000/getdata"
    //const [0] geometry = res.latitud
    //const [1] geometry = res.longitud
    
    const markers = parques.map((parques, i) => (
        <Marker key={i} position={parques.geometry} icon={LocationIcon} >
            <Popup>
               
                        <div className="mb-4">
                            <img
                                src= {parques.src}
                                alt="Foto - Parque"
                                className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
                            />
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4">
                            <h3 className="font-semibold text-xl">{parques.name}</h3>
                           
                        </div>
                  
            </Popup>
        </Marker>

    ), 
    );
    return markers;

};



export default Markers