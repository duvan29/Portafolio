import React from 'react';

export default function Form() {
  return (
    <div className="w-full p-5 flex flex-col">
      <h1 className="text-xl mb-3">Formulario de Contacto</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="text-sm mb-1">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="text-sm mb-1">Email o Teléfono:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="text-sm mb-1">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            
            className="border p-2 w-full h-24"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Enviar</button>
      </form>
    </div>
  );
}