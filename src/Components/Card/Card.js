import React from 'react'
import './Card.css'
function Card(props){
  const data = props.data
  if(!data.img) return(
    <div className="card">
      <div className="sem-img">
        <h1>{data.title}</h1>
      </div>
      <h2>{data.title}</h2>
    </div>
  )
  else return(
    <div className="card">
      <img src={data.img} alt={data.title}/>
      <h2>{data.title}</h2>
    </div>
  )
}
export default Card
