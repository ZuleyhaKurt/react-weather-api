import { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { useState} from "react";
import Header from './components/Header';
import Home from './components/Home';
import TurkeyMaps from './components/TurkeyMaps';
import TurkeyCities from './components/TurkeyCities';
import Router from './components/Router';
import { useNavigate } from 'react-router-dom';






function App() {
  const [citys, setCitys] = useState("Ankara")
  const [dataApp, setDataApp] = useState({})
  
  const APP_ID =process.env.REACT_APP_API_ID;
  console.log(APP_ID)
  

 console.log(citys)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${citys}&appid=${APP_ID}&units=metric&lang=tr`
  
  const getWeather = async () => {

      const weatherapp = await axios(url)
      console.log(weatherapp)
      console.log(weatherapp.data)
    const {
      name,
      main: { temp,humidity },
      weather,id,wind:{speed}
    } = weatherapp.data
   
    setDataApp({name,temp,weather,id,speed,humidity})
}

  useEffect(() => {
    getWeather();
  

  } ,[citys]);
console.log(dataApp)

  return (
    <div className="App bg-secondary ">
     <Router  dataApp={dataApp} setDataApp={setDataApp} citys={citys} setCitys={setCitys}/>
    </div>
  );
}

export default App;
