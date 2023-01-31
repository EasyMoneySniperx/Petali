import React from 'react';
import "tailwindcss/tailwind.css";
import { MapContainer, TileLayer} from "react-leaflet";
import '../assets/css/Mapa.css';
import "leaflet/dist/leaflet.css";
import Markers from '../components/Marker';
import packageInfo from "../assets/data.json"
import { useAuth } from '../context/authContext';


const Mapa = () => {

    const {user,logout,loading} = useAuth()

    const handleLogout = async () =>{
        await logout()
        
    }

    if (loading) return <h1>loading </h1>

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
                        onClick={handleLogout}
                        href="/login"
                        className="xl:py-1 xl:px-2 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        Salir
                    </a>
                </nav>
                <div>
                <div className="bg-white py-4 px-6 max-w-md border-l-4 border-sky-600 rounded-lg flex items-center gap-3 shadow-lg">
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 text-sky-600"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    </svg>
  </div>
  <div>
    <h3 className="font-semibold">Información</h3>
    <p className="text-gray-500">Bienvenido {user.email} </p>
  </div>
</div>
                </div>
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
