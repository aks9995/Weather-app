import React from "react";
import { useState } from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState("")

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=488ab70abbdad7c49dc20816cc543e1d`;

  const searchLocation = (e) =>{
    if(e.key === "Enter") {
      axios.get(url).then((response) =>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
    
  }
  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={e => {setLocation(e.target.value)}}
        onKeyDown={searchLocation}
        placeholder="Enter Location"
        type="text"/>
      </div>
      <div className="container">

        {data.name &&

        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
          {data.main &&  <h1>{data.main.temp.toFixed() -273}°C</h1> }
          </div>
          <div className="description">
          <p>{data.weather && data.weather[0].main}</p>
          </div>
        </div>
}
        {data.name &&
        <div className="bottom">
          <div className="feels">
            <p>Feels Like</p>
            {data.main && <p className="bold"> {data.main.feels_like.toFixed() -273}°C</p> }
          </div>
          <div className="humidity">
          <p >Humidity</p>
          <p className="bold">{data.main && data.main.humidity}%</p>
          </div>
          <div className="wind">
          <p>Wind Speed</p>
            <p className="bold">{data.wind && data.wind.speed} MPH</p>
          </div>
        </div>
}

      </div>
    </div>
  );
}

export default App;
