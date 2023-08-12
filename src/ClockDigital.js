import { useState } from "react";

const ClockDigital = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };
  setInterval(updateTime, 1000);
  let todayDate = new Date();

  const getWeekDay = (date) => {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  };

  let today = getWeekDay(todayDate);

  const getTimeZone = () => {
    var offset = todayDate.getTimezoneOffset(),
      o = Math.abs(offset);
    return (
      (offset < 0 ? "+" : "-") +
      ("00" + Math.floor(o / 60)).slice(-2) +
      ":" +
      ("00" + (o % 60)).slice(-2)
    );
  };

  return (
    <div className="bg-blue-800 w-64 h-auto border-solid border-8 border-blue-600 justify-items-center">
      <h3 className="text-white text-lg font-semibold text-center">
        {today} {todayDate.getDate()}/{todayDate.getMonth() + 1}/
        {todayDate.getFullYear()}
      </h3>

      <div className="bg-black  border-solid border-4 border-red-600 rounded-sm ">
        <h1 className="text-5xl text-green-600 font-extrabold tracking-wider text-center">
          {currentTime}
        </h1>
      </div>

      <h4 className="text-sm font-bold text-red-400 text-center">
        <span>
          Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
        </span>{" "}
        |<span className="italic"> UTC {getTimeZone()}</span>
      </h4>
    </div>
  );
};

export default ClockDigital;
