import { useTranslations } from "next-intl";
import Header from "../views/Header";
import AboutUs from "../views/AboutUs";
import Skills from "../views/Skills";
import TimeLineAndProyects from "../views/timeLAndP";
import ReviewsAndForm from "../views/ReviewsAndForm";


export default function Home() {
  const t = useTranslations("Index");

  return (
    <>
      <div className="xs:px-5 xl:px-[400px] pb-[20px]">
        <Header/>
        <AboutUs/>
        <Skills/>
        <TimeLineAndProyects/>
        <ReviewsAndForm/>
      </div>
    </>
  );
}