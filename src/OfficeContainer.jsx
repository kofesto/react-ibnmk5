import React,{useState} from 'react';
import offices from './office.json';

function OfficeContainer() {
  const [city,setCity] = useState('');
  //console.log(offices)
  const ng = (country)=>{
    offices.filter(office => office.country === country).map(data=>{
       return setCity(data.city);
    })
  }
  
  console.log(city)
  return (
  <>
  <div>
    <div className="country">
      <span>
        <h2>Nigeria</h2>
        <p>{city ? city.map(c=> { return c}) : ""}</p>
      </span>
      <button className="show-city" onClick={()=>ng('Nigeria')}>Show</button>
    </div>
    <div className="country">
      <span>
        <h2>USA</h2>
      </span>
      <button className="show-city" onClick={()=>ng('USA')}>show</button>
    </div>
      <div className="country">
        <span>
          <h2>Kenya</h2>
        </span>
        <button className="show-city" onClick={()=>ng('Kenya')}>show</button>
      </div>
  </div>
  </>
  );
}

export default OfficeContainer;
