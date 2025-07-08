import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Mumbai",
    feelsLike: 31.63,
    humidity: 85,
    temp: 27.54,
    weather: "overcast clouds",
  });

  let updateInfo = (result)=>{
    setWeatherInfo(result)
  }
  
  return (
    <div style={{ textAlign: "center" }}>
      <h2>WeatherApp By Venom</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
