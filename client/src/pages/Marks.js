import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Marks() {
  const user=useOutletContext();
  console.log(user);
  return (
    <div>Marks</div>
  )
}
