import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TurkeyMap from 'turkey-map-react';



const TurkeyMaps = ({ dataApp,setDataApp,citys,setCitys }) => {
    const [cityName, setCityName] = useState("")

   const navigate = useNavigate()
    
    const handleClick = () => {
        setCitys(cityName.split(" ")[1])
        navigate(`/`)
        }

    return (
        <div>
            <div>
                <h3 className='text-center text-danger mt-3'>{cityName}</h3></div>
            <TurkeyMap
                hoverable={true}
                customStyle={{ idleColor: "#dc3522", hoverColor:"#eeee"  }}
                onHover={({ plateNumber, name }) => setCityName(plateNumber +" " +name)}
                onClick={handleClick}

                
            />
        </div>
    )
}

export default TurkeyMaps
