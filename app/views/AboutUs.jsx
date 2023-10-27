"use client";
import { useTranslations } from "next-intl";
import { TypeAnimation } from "react-type-animation";

export default function AboutUs() {
  const t = useTranslations("About");

  return (
    <div className="w-full rounded-lg bg-gris-50 flex pt-10">
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
