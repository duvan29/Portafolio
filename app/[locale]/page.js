import { useTranslations } from "next-intl";
import Header from "./components/Header";
import Image from "next/image";
import AboutUs from "./components/AboutUs";
import Skills from "./components/Skills";


export default function Home() {
  const t = useTranslations("Index");

  return (
    <>
      <div className="xs:px-5 xl:px-[400px]">
        <Header/>
        <AboutUs/>
        <Skills/>
      </div>
    </>
  );
}