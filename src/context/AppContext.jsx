import { useEffect, useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

import React from "react";

const AppContextProvider = ({ children }) => {
  const [timeframe, setTimeframe] = useState("weekly");
  const [isDaily, setIsDaily] = useState(false);
  const [isWeekly, setIsWeekly] = useState(true);
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <AppContext.Provider
      value={{
        timeframe,
        setTimeframe,
        isDaily,
        setIsDaily,
        isWeekly,
        setIsWeekly,
        isMonthly,
        setIsMonthly,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
