import React from "react";

const Card = ({ title, current, previous, bgColor, icon }) => {
  return (
    <div
      className="rounded-xlg mt-6 pt-10 relative overflow-hidden xl:w-desktop-card xl:mt-0"
      style={{ backgroundColor: bgColor }}
    >
      <img
        src={icon}
        alt="icon"
        className={`absolute top-0 right-5 transform ${
          title === "Exercise" ? "-translate-y-1" : "-translate-y-3"
        }`}
      />
      <div className="bg-dark-blue rounded-xlg px-6 py-8 flex flex-col gap-4 relative xl:absolute xl:bottom-0 w-full cursor-pointer hover:bg-desaturated-blue-active">
        <div className="flex justify-between">
          <span className="font-medium">{title}</span>
          <div className="my-auto">
            <img
              src="images/icon-ellipsis.svg"
              alt="menu"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex justify-between items-center xl:flex-col xl:items-start">
          <span className="text-4xl font-light">{current}hrs</span>
          <span className="text-pale-blue">Last Week - {previous}hrs</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
