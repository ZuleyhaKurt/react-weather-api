import { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { useState} from "react";
import Header from './components/Header';
import Home from './components/Home';
import TurkeyMaps from './components/TurkeyMaps';






function App() {
  const [city, setCity] = useState("Ankara")
  const[dataApp,setDataApp]=useState({})

 console.log(city)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8679780ea9ee4fcdc4514f93f08f4e3f&units=metric&lang=tr`
  
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

  } ,[city]);
console.log(dataApp)

  return (
    <div className="App">
      <Header />
      <Home dataApp={dataApp} setDataApp={setDataApp} city={city} setCity={setCity} />
      <TurkeyMaps  dataApp={dataApp} setDataApp={setDataApp} city={city} setCity={setCity}/>
    
    </div>
  );
}

export default App;
