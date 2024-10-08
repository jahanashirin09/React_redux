import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Users.css'
import {Link,useNavigate,useSearchParams} from "react-router-dom"

export default function Users() {
  const [data,setData]=useState([]);
  const[searchParams,setSearchParams]=useSearchParams();
  const navigate=useNavigate();
 

  const cls=searchParams.get('class');
  console.log(cls);
  useEffect(()=>{
    axios("data.json")
        .then((response)=>{
          setData(response.data)
        });
  },[]);
  const handleSelectChange=(evt)=>{
    setSearchParams({
      class:evt.target.value
    })
  }
  return (
    <div className='page users'>
      <div className='options'>
        <div className='selection'>
          Select Class
        
        <div className='drop-down'>
          <select className='drop-down-value' onChange={handleSelectChange}>
          <option value="all">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
        </div>
      </div>
      {data
      .filter((item)=>{
        if(!cls){
          return true;
        }
        return cls===item.class;
      })
      .map((item)=>{
        return(
        <div className='users-item' key={item.id} onClick={()=>{
          navigate(`/details/${item.id}`,{
            //replace:true,
            state:{
              data:item
            }
          });
        }}>
          <div className='title'>
            {item.name}
            
            </div>
            <div className='descr'>
            
            Address:{item.address}
            </div>
            <div className='descr'>
            
            Class:{item.class}
            </div>
            </div>);
      })}

    </div>
  )
}
