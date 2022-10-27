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
        
    
        <div className="fullbody w-100 h-100">
            <div className="text-center head ">
            <h1>Welcome</h1>
            <p>Click for the other cities' weather.</p>
            </div>
            <div className='text-center'>
            <Button variant="dark" className='m-1 w-20  link-item' onClick={()=>navigate(`/turkey-map`)}>
            Turkey Map
            </Button>
            <Button variant="dark" className='m-1 w-20 link-item 'onClick={()=>navigate(`/turkey-cities`)}>
            List of Cities
            </Button>
            </div>
            <div className="d-flex justify-content-center">
            <Card key={dataApp?.id} style={{ width: '40rem' }} className= "m-3 cardbox">
        <Card.Body className='text-center'>
            <Card.Title className="mr-0">{dataApp?.name}</Card.Title>
            <Card.Subtitle className="text-dark my-5">
                        <h2 className="text-center">{dataApp?.temp}°C</h2>
                       
            </Card.Subtitle>
            <Card.Text className="text-dark d-flex justify-content-between">
                <Card.Text>
                    <Card.Text>
                    {dataApp?.speed}km/h
                    </Card.Text>
                    <Card.Text>
                       {dataApp?.humidity} %
                    </Card.Text>
                </Card.Text>
                <Card.Text className="text-dark ">
                    {dataApp?.weather[0].description}
                </Card.Text>
            </Card.Text>
        </Card.Body>
                </Card> 
                </div>
             
   
         
            
         
       
       
               
           
                </div>
  )
}

export default Home