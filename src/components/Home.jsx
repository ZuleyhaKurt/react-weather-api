import React from 'react'
import { Card } from 'react-bootstrap'


const Home = ({ dataApp, setDataApp, city, setCity }) => {
  

    console.log(dataApp)
    return (
        
    
        <>
            
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