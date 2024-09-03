import React, { useEffect, useState } from 'react'
import {NavLink, useLocation, useNavigate, useParams,Routes,Route, Outlet} from 'react-router-dom'
import axios from 'axios'
import './Details.css'


export default function Details() {
    const location=useLocation()
    const state=location.state||{};
    const {userId}=useParams();
    const [user,setUser]=useState(state.data);
    const Navigate=useNavigate()
    
    console.log(location);
    useEffect(()=>{
        if(!user){
            axios('/data.json')
           .then((response)=>{
            const item=response.data.find((userItem)=>userItem.id===parseInt(userId));
            setUser(item)
           });
        }
        
    },[userId,user])
    if(!user){
        return null;
    }
    
    // const obj=useParams()
    // console.log(obj);
  return (
    <div className='page details'>
        <div className='title'>
            {user.name}
        </div>
        <div className='body'>
            address:{user.address}
        </div>
        <div className='body'>
            phone:{user.phone}
        </div>
        <div className='body'>
            class:{user.class}
        </div>
        <div className='back-page'>
            <button onClick={()=>{
                Navigate("/Users")
            }}
            >Back</button>
        </div>
        <div className='sub-menu'>
            <NavLink to="" end> <span>Marks</span></NavLink>
            <NavLink to="sports"> <span>Sports</span></NavLink>
            <NavLink to="remarks"> <span>Remarks</span></NavLink>
        </div>
        <div className='details-body'>
            <Outlet context={user}/>
            
        </div>
    </div>
  )
}
