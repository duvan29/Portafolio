import { useTranslations } from "next-intl";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Skills from "../components/Skills";
import TimeLineAndProyects from "../components/timeLAndP";


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