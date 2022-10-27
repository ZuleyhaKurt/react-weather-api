import React from 'react';
import useTurkeyCities from "use-turkey-cities";
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const TurkeyCities = ({dataApp,setDataApp,citys,setCitys}) => {

    const navigate = useNavigate();
    const { cities, city, setCity} = useTurkeyCities();

const handleSubmit = (e) => {
  setCitys(city)
  console.log(e.target.value) 
  navigate(`/`)
}
  console.log(city);
  console.log(citys);

  return(
    <div className='d-flex justify-content-center'>
    <Form.Group className="mt-5 d-flex gap-3 align-items-center" style={{ width: '40rem' }} >
        <Form.Select  value={city} onChange={(e) => {setCity(e.target.value)}}>
            {cities.map(city => (
                <option value={city}> {city} </option>
            ))}
        </Form.Select>
       
        <button className='submitbutton' type="submit" value="Submit" onClick={handleSubmit}>Submit</button>
    </Form.Group>
    </div>
      
  )
}

export default TurkeyCities; 