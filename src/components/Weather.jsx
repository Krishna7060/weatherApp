import React, {  useEffect, useRef, useState } from "react";
import searchicon from "../assets/searchicon.png";
import weatherimage from "../assets/weatherimage.png";
import temprature from "../assets/temprature.png";
import pressure from "../assets/pressure.png";
import humidity from "../assets/humidity.png";
import visibility from "../assets/visibility.png";
import wind from "../assets/wind.png";

function Weather() {
  const inputRef = useRef()
  const [weatherdata, setWeatherData] = useState(false)
    

  const search = async (city) => {
    try {
      const url = `http://api.weatherapi.com/v1/current.json?key=be382e39bc9147dbb82124156241607&q=${city}` ;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      setWeatherData({
        temp:data.current.temp_c,
        press:data.current.pressure_mb,
        humid:data.current.humidity,
        visibi:data.current.vis_km,
        windSpeed:data.current.wind_kph,
        cityName:data.location.name

        
      })
      
    } catch (error) {

    }
  };

  useEffect(()=>{
    search()
  },[])

  

  return (
    <div className=" flex justify-center  min-h-screen min-w-screen bg-slate-500 bg ">
      <div>
        <div>
          <h1 className="text-center font-bold">Today Weather</h1>
        </div>
        <div>
          <div className="flex justify-center mt-2">
            <input
              type="text"
              placeholder="Search City "
              ref={inputRef}
              className="bg-gray-700 rounded-lg text-center font-bold w-96"
            />
            <img
              src={searchicon}
              alt="search"
              className="h-8 w-8  rounded-lg mx-1"
              onClick={()=>search(inputRef.current.value)}
            />
          </div>
          <div className="mt-3">
            <img src={weatherimage} alt="" className="h-36 w-36 rounded-full" />
            <div className="font-bold m-2 ">
              <div className="flex  items-center m-2">
                <p className="text-2xl text-green-500"><h2>City</h2></p>
                <span className="m-3">{weatherdata.cityName}</span>
                
              </div>

              <div className="flex items-center">
                <img src={temprature} alt="" className="w-10 h-10 m-2" />
                <span>Temrature: {weatherdata.temp}</span>
              </div>
              <div className="flex items-center">
                <img src={pressure} alt="" className="w-10 h-10 m-2" />{" "}
                <span>pressure: {weatherdata.press}</span>
              </div>
              <div className="flex items-center">
                <img src={humidity} alt="" className="w-10 h-10 m-2" />{" "}
                <span> Humidity  {weatherdata.humid}%</span>
              </div>
              <div className="flex items-center">
                <img src={wind} alt="" className="w-10 h-10 m-2" />{" "}
                <span> WindS speed:KPH {weatherdata.windSpeed}</span>
              </div>
              <div className="flex items-center">
                <img src={visibility} alt="" className="w-10 h-10 m-2" />
                <span> Visibility : {weatherdata.visibi}KM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
