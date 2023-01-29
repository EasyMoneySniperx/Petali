import "tailwindcss/tailwind.css";
import React from 'react';
import '../assets/css/Inicio.css';

const Inicio = ()  => {
    return (
<div class="inicio relative h-screen overflow-hidden bg-[#252831]">
    <div class="absolute inset-0 bg-black opacity-25">
    </div>
    <header class="absolute top-0 left-0 right-0 z-20">
        <nav class="container px-6 py-4 mx-auto md:px-12">
            <div class="items-center justify-between md:flex">
                <div class="flex items-center justify-between">
                  
                    <div class="md:hidden">
                        <button class="text-white focus:outline-none">
                            <svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="items-center hidden md:flex">
                    <a href ="mapa"
                    class="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                        Navega
                    </a>
                    <a href ="login" 
                    class="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                        Iniciar Sesion
                    </a>
                    <a href= "register"
                    class="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                         Registrarse
                    </a>
                </div>
            </div>
        </nav>
    </header>
    <div class="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
        <div class="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
            <span class="font-bold text-yellow-400 uppercase">
                Petali
            </span>
            <h1 class="mt-4 text-4xl font-bold leading-tight text-white sm:text-7xl">
                Amor es una palabra de
                <br/>
                    cuatro patas
            </h1>
            <a href="mapa" class="block px-4 py-3 mt-10 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg hover:bg-gray-100">
                Comienza
            </a>
        </div>
    </div>
</div>


    );
}

export default Inicio;