import React,{useState} from 'react';
import offices from './office.json';

function OfficeContainer() {
  const [nigeria,setNigeria] = useState('');
  const [usa,setUsa] = useState('');
  const [kenya,setKenya] = useState('');
  //console.log(offices)
  const ng = (country)=>{
    offices.filter(office => office.country === country).map(ng=>{
       return setNigeria(ng);
    })
  }
  
  console.log(nigeria)
  return (
  <>
  <div>
    <div className="country">
      <span>
        <h2>Nigeria</h2>
      </span>
      <button className="show-city" onClick={()=>ng('Nigeria')}>Show</button>
    </div>
    <div className="country">USA
    <button className="show-city" onClick={()=>ng('USA')}>show</button></div>
    <div className="country">Kenya<button className="show-city">show</button></div>
  </div>
  </>
  );
}

export default OfficeContainer;
