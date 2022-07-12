import axios from "axios";
import React, { useState, useEffect } from "react";

import Loader from '../Components/Loader/Loader';

const Weather = () => {
    const [weather, setWeather] = useState({});
  const [locations, setLocations] = useState("Львів");
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    ifClicked();
  }, []);

  function ifClicked() {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${locations}&APPID=629f2f84fe43e1981481fdd3dbd68c53&units=metric`
    )
      .then((response) => {
        setWeather(response.data);
        console.log(weather);
      })
      .catch((error) => alert('Невірна локація'));
    fetch(
      `https://api.unsplash.com/search/photos?query=${locations}&client_id=8N5T_x-wPkRdJwwMhZ6gvYgdjIN_hihy687-Noz7chY`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Помилочка");
        }
      })
      .then((data) => {
        console.log(data);
        setPhotos(data?.results[0]?.urls?.raw);
      })
      .catch((error) => console.log(error));
  }
    return ( 
     <div className="container">
      
        <input
          type="text"
          value={locations}
          onChange={(e) => setLocations(e.target.value)}
          placeholder="Введіть місто"
          className="location_input"
        />
        <button className="location_searcher" onClick={ifClicked}>
          Дізнатися погоду
        </button>
    <div className="wrapper">
      </div>
      <div className="app__data">
        <h1 className="temp">Температура у {locations}: {weather?.main?.temp} градусів</h1>
        <p className="temp">Мінімальна температура сьогодні {weather?.main?.temp_min} градусів</p> 
        <p className="temp">Максимальна температура сьогодні {weather?.main?.temp_max} градусів</p> 
        <h2 className="temp">Відчувається як {weather?.main?.feels_like} градусів</h2> 
        <p className="temp">Вологість повітря {weather?.main?.humidity} %</p> 
        <p className="coord">Координати міста: широта - {weather?.coord?.lat} довгота -  {weather?.coord?.lon}</p> 
        <h1 className="wind">Швидкість вітру у {locations}: {weather?.wind?.speed}м/с</h1>
      </div>
<img className="app__image" src={photos}/>
    </div>
    );
};

export default Weather;