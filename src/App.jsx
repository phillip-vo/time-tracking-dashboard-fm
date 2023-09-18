import { useContext, useState } from "react";
import { AppContext } from "./context/AppContext";
import { Card, Layout, ProfileCard } from "./components";
import data from "./data/data.json";

function App() {
  const { timeframe } = useContext(AppContext);

  return (
    <Layout>
      <div className="xl:h-desktop xl:flex xl:gap-6 xl:justify-center">
        <ProfileCard />
        <div className="xl:flex xl:flex-wrap xl:w-desktop-card-container xl:gap-6">
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                current={item.timeframes[timeframe].current}
                previous={item.timeframes[timeframe].previous}
                bgColor={item.bgColor}
                icon={item.icon}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default App;
