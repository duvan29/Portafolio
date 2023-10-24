import Proyects from "./Proyects";
import TimeLine from "./timeLine";

export default function TimeLineAndProyects() {
    return (
      <div className="w-full pt-5 flex justify-between items-center">
          <div className="w-[70%] bg-gris-50 p-4 rounded-lg">
            <TimeLine/>
          </div>
          <div className="w-[30%] pl-4 rounded-lg flex flex-col">
            <Proyects/>
          </div>
      </div>
    );
  }