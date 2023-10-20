"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function AboutUs() {
  const t = useTranslations("About");

  return (
    <div className="w-full rounded-lg bg-gris-50 flex py-10">
      {/* Parte izquierda */}
      <div className="w-[60%] p-4">
        <div className="flex mb-2">
            <h1 className="text-4xl font-semibold">{t("title")}</h1>{" "}
            <h1 className="text-4xl font-semibold dark:text-violeta text-moradoBlack ml-[5px]">{t("name")}</h1>
        </div>
        <div className="flex">
          <TypeAnimation
            sequence={[
              // Cambio de texto con animación
              `${t("profesion")} ${t("full")} `,
              300, // Espera de 1 segundo antes de cambiar a la siguiente línea
              `${t("profesion")} ${t("full")} `,
              300,
              `${t("profesion")} ${t("back")} `,
              300,
            ]}
            wrapper="h2"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
        <hr className="w-[20%] my-5 dark:text-violeta text-moradoBlack text-[20px] border-2" />
        <p>{t("description")}</p>

        {/* Botones en una columna */}
        <div className="mt-10 justify-between flex w-[50%]">
            <button className="bg-gris text-white p-4 rounded-full flex items-center justify-center">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            height="1em" 
            viewBox="0 0 496 512"
            className="w-8 h-8"
            ><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
            </button>
            <button className="bg-gris text-white p-4 rounded-full flex items-center justify-center">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="1em" 
                viewBox="0 0 448 512"  
                className="w-8 h-8">
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
            </button>
            <button className="bg-gris w-[100px] text-white p-2 rounded-full flex items-center justify-around">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="1em" 
                viewBox="0 0 384 512"
                className="w-8 h-8">
            <path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"/></svg>
                CV
            </button>
        </div>
      </div>

      {/* Parte derecha (imagen) */}
      <div className="w-[40%]">
        <img
          src="URL_DE_TU_IMAGEN" // Reemplaza con la URL de tu imagen
          alt="Imagen de muestra"
          width={400} // Ajusta el ancho según tus necesidades
          height={300} // Ajusta la altura según tus necesidades
        />
      </div>
    </div>
  );
}
