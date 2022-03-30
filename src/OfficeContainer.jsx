import React,{useState} from 'react';
import offices from './office.json';

function OfficeContainer() {
  const [nigeria,setNigeria] = useState('');
  const [usa,setUsa] = useState('');
  const [kenya,setKenya] = useState('');
  //console.log(offices)
  const ng = ()=>{
    offices.filter(office => office.country === 'Nigeria').map(nig=>{
       return setNigeria(nig);
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
      <button className="show-city" onClick={()=>ng()}>Show</button>
    </div>
    <div className="country">USA<button className="show-city">show</button></div>
    <div className="country">Kenya<button className="show-city">show</button></div>
  </div>
  </>
  );
}

export default OfficeContainer;
