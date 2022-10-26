import React from 'react'
import { BrowserRouter ,Routes,Route } from "react-router-dom"
import Home from './Home'
import TurkeyMaps from './TurkeyMaps'
import TurkeyCities from "./TurkeyCities"
import Header from './Header'

const Router = ({ dataApp, setDataApp, citys, setCitys }) => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home dataApp={dataApp} setDataApp={setDataApp} citys={citys} setCitys={setCitys} />} />
        <Route path="/turkey-cities" element={<TurkeyCities dataApp={dataApp} setDataApp={setDataApp} citys={citys} setCitys={setCitys} />} />
        <Route path="/turkey-map" element={<TurkeyMaps dataApp={dataApp} setDataApp={setDataApp} citys={citys} setCitys={setCitys}/>} />
       
    </Routes>
    </BrowserRouter>
  )
}

export default Router