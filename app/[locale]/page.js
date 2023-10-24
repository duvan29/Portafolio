import { useTranslations } from "next-intl";
import Header from "../components/Header";
import AboutUs from "../views/AboutUs";
import Skills from "../views/Skills";
import TimeLineAndProyects from "../views/timeLAndP";


export default function Home() {
  const t = useTranslations("Index");

  return (
    <>
      <div className="xs:px-5 xl:px-[400px] pb-[20px]">
        <Header/>
        <AboutUs/>
        <Skills/>
        <TimeLineAndProyects/>
      </div>
    </>
  );
}