import React from 'react'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'



const Home = ({ dataApp, setDataApp, citys, setCitys }) => {
  

   const navigate= useNavigate()
    
    console.log(dataApp)
    if (!dataApp.weather) {
        return <h1>Loading</h1>
    }
    return (
        
    
        <>
            <div>
            <Button variant="warning" className='m-1 w-20' onClick={()=>navigate(`/turkey-map`)}>
            Turkey Map
            </Button>
            <Button variant="warning" className='m-1 w-20'onClick={()=>navigate(`/turkey-cities`)}>
            List of Cities
            </Button>
            </div>
            <Card key={dataApp?.id} style={{ width: '50rem' }} className= "m-3">
        <Card.Body>
            <Card.Title className="mr-0">{dataApp?.name}</Card.Title>
            <Card.Subtitle className="text-muted my-5">
                        <h2 className="text-center">{dataApp?.temp}°C</h2>
                        <p className="text-center"></p>
            </Card.Subtitle>
            <Card.Text className="text-muted d-flex justify-content-between">
                <Card.Text>
                    <Card.Text>
                    {dataApp?.speed}km/h
                    </Card.Text>
                    <Card.Text>
                       {dataApp?.humidity}
                    </Card.Text>
                </Card.Text>
                <Card.Text className="text-muted ">
                    {dataApp?.weather[0].description}
                </Card.Text>
            </Card.Text>
        </Card.Body>
    </Card> 
             
   
         
            
         
       
       
               
           
      </> 
  )
}

export default Home