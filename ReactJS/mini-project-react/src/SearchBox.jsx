import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({updateInfo}) {
let [city,setCity] = useState("");

const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fa1fed9aef5c413854b9e19a88bdc000&units=metric`;

let getWeatherInfo = async()=>{
  let data = await fetch(API_URL);
  let getData = await data.json();
  console.log(getData);
  let result = {
    city:city,
    temp: getData.main.temp,
    humidity:getData.main.humidity,
    feelsLike:getData.main.feels_like,
    weather:getData.weather[0].description,
  }

  return result;
}

let handleChange = (evt)=>{
  setCity(evt.target.value);
}

let onSubmit = async (evt)=>{
    evt.preventDefault();
    setCity("");
   let info = await getWeatherInfo();
   updateInfo(info);
}

  return (
    <div className="searchbox">
      <h3>Search for the Weather!</h3>
      <form onSubmit={onSubmit} action="">
        <TextField id="city" label="City" variant="outlined" required size="small" onChange={handleChange} value={city} />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
