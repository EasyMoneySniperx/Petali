import React from "react";
import "tailwindcss/tailwind.css";
import { Marker, Popup } from "react-leaflet";
import { LocationIcon } from "./IconLocation";

const Markers = (props) => {
    const { parques } = props;
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