import React from 'react'
import Wheel from './SpinWheel'
import './Wheel.css'

function Layout() {
   const places =  ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10"];
  return (
 
      <div className="Layouts">
        <h1>Spin the Wheel!</h1>
        <Wheel items={places} />
      </div>
 
  )
}
export default Layout