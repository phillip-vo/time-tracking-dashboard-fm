import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ProfileCard = () => {
  const {
    isDaily,
    setIsDaily,
    isWeekly,
    setIsWeekly,
    isMonthly,
    setIsMonthly,
    setTimeframe,
  } = useContext(AppContext);

  return (
    <div className="bg-dark-blue rounded-xlg xl:w-48">
      <div className="flex justify-center items-center bg-blue rounded-xlg gap-4 py-8 xl:flex-col xl:items-start xl:pt-6 xl:pl-6 xl:pb-20">
        <img
          src="images/image-jeremy.png"
          alt="avatar"
          width={75}
          className="border-2 rounded-full"
        />
        <div className="font-light">
          <span className="text-pale-blue">Report for</span>
          <h1 className="text-2xl xl:w-32">Jeremy Robson</h1>
        </div>
      </div>
      <ul className="flex justify-evenly gap-16 p-6 text-desaturated-blue cursor-pointer xl:flex-col xl:gap-3">
        <li
          className={`${isDaily && "text-white"}`}
          onClick={() => {
            setIsDaily(true);
            setIsWeekly(false);
            setIsMonthly(false);
            setTimeframe("daily");
          }}
        >
          Daily
        </li>
        <li
          className={`${isWeekly && "text-white"}`}
          onClick={() => {
            setIsDaily(false);
            setIsWeekly(true);
            setIsMonthly(false);
            setTimeframe("weekly");
          }}
        >
          Weekly
        </li>
        <li
          className={`${isMonthly && "text-white"}`}
          onClick={() => {
            setIsDaily(false);
            setIsWeekly(false);
            setIsMonthly(true);
            setTimeframe("monthly");
          }}
        >
          Monthly
        </li>
      </ul>
    </div>
  );
};

export default ProfileCard;
