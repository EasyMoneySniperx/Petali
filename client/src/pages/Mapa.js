import React from 'react';
import "tailwindcss/tailwind.css";
import { MapContainer, TileLayer} from "react-leaflet";
import '../assets/css/Mapa.css';
import "leaflet/dist/leaflet.css";
import Markers from '../components/Marker';
import packageInfo from "../assets/data.json"


const Mapa = () => {
    return (
        <div>
            <div className="w-full bg-[#252831] p-4 flex flex-col xl:flex-row gap-4 items-center justify-center md:justify-between">
                <h1 className="uppercase font-semibold text-yellow-400 cursor-pointer text-xl">
                    Petali
                </h1>
                <nav className="flex items-center gap-4">
                    <a
                        href="/#"
                        className="xl:py-1 xl:px-2 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        Inicio
                    </a>
                    <a
                        href="/#"
                        className="xl:py-1 xl:px-2 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        Nosotros
                    </a>
                    <a
                        href="/#"
                        className="xl:py-1 xl:px-2 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        Destacados
                    </a>
                    <a
                        href="/#"
                        className="xl:py-1 xl:px-2 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        Blog
                    </a>
                </nav>
            </div>
            <MapContainer center={[3.43722, -76.5225]} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Markers parques={packageInfo.parques} />

            </MapContainer> </div>
    );
}

export default Mapa;
