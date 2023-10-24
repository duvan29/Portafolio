import Proyects from "../components/Proyects";
import TimeLine from "../components/timeLine";

export default function TimeLineAndProyects() {
    return (
      <div className="w-full pt-5 flex justify-between items-stretch">
          <div className="w-[75%] bg-gris-50 p-4 rounded-lg">
            <TimeLine/>
          </div>
          <div className="w-[25%] pl-4 rounded-lg flex flex-col">
            <Proyects/>
          </div>
      </div>
    );
  }