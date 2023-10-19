"use-client"
// import React, { useState, useEffect } from 'react';

export default function LenguajeSelector() {
  // const [selectedLanguage, setSelectedLanguage] = useState('es');

  // useEffect(() => {
  //   const changeLanguage = (e) => {
  //     setSelectedLanguage(e.target.value);
  //   };

  //   console.log(selectedLanguage);

  //   // Puedes realizar aquí cualquier lógica adicional basada en el idioma seleccionado.

  // }, [selectedLanguage]);

  return (
    <select>
      <option value="es">Español</option>
      <option value="en">English</option>
    </select>
  );
}