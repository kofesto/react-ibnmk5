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
  <div className="country">
    <div>
      <span>
        <h2>Nigeria</h2>
      </span>
      <button className="show-cities" onClick={()=>ng()}>Show</button>
    </div>
    <div>USA<button>show</button></div>
    <div>Kenya<button>show</button></div>
  </div>
  </>
  );
}

export default OfficeContainer;
