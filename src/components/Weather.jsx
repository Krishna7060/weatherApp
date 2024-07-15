import React from "react";
import searchicon from "../assets/searchicon.png";
import weatherimage from "../assets/weatherimage.png";

function Weather() {
  return (
    <div className=" flex justify-center  min-h-screen min-w-screen bg-blue-500">
      <div>
        <div>
          <h1 className="text-center font-bold">Today Weather</h1>
        </div>
        <div>
          <div className="flex justify-center mt-2">
            <input
              type="text"
              placeholder="Search City "
              className="bg-gray-700 rounded-lg text-center font-bold"
            />
            <img src={searchicon} alt="search"  className="h-8 w-8 lg"/>
          </div>
          <div className="mt-3">
            <img src={weatherimage} alt="" className="h-52 w-52 rounded-lg" />
            <div className="font-bold ">
                <p>City</p>
            <img src="" alt="temp" /><span></span>
            <img src="" alt="wind" /> <span></span>
            <img src="" alt="pressure" /><span></span>

            
            
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
