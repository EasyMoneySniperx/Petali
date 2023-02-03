import "tailwindcss/tailwind.css";
import React from 'react';

const Calificanos = ()  => {
    return (
        
        <div class="inicio relative h-screen overflow-hidden bg-[#252831]">
            <div className="flex items-center justify-center h-screen">
            <div className="bg-gray-100 just max-w-2xl mx-auto py-4 px-6 rounded-lg shadow-xl">
  <div className="flex items-center justify-between mb-4">
    <p className="text-gray-500 uppercase text-sm">Gracias por mirarnos</p>
    <span className="bg-yellow-400 text-white py-2 px-4 text-xs rounded uppercase">
      Petali
    </span>
  </div>
  <div className="flex flex-col gap-2 mb-4">
    <h1 
      className="text-2xl text-gray-700 font-bold"
    >
    ¡Que esperas para calificarnos!
    </h1>
    <p className="text-gray-600">
      Calificanos en un rango de 0 a 5, donde 0 es lo mas bajo y quiere decir que nuestras recomendaciones no te gutaron y 5 el más alto donde pudiste encontrar el lugar indicado para pasear a tu amiguito.
    </p>
  </div>
  <div className="flex items-center justify-center">
    
  <input
          type="calificación"
          id="calificacion"
          name="calificacion"
          autoComplete="off"
          className="w-25 bg-gray-100 p-2  py-2 px-4 bg-transparent border rounded mt-2 outline-none focus:border-yellow-400"
          placeholder="Ingresa tu calificación"
        />
        <button
          type="submit"
          className="w-50 bg-gray-100 p-2 py-2 rounded mt-2 hover:bg-yellow-400 transition-colors"
        >
          Enviar
        </button>
      
  </div>
</div>
</div>

        </div>
    
    );

   
}

export default Calificanos;