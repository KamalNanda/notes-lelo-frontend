import React from 'react'
import './Card.css'
function Card(props){
  const data = props.data
  return(
    <div className="card">
      <div className="sub-img">
        <h3 style={{fontSize: "1.4rem"}}>{data}</h3>
      </div>
    </div>
  )
}
export default Card
