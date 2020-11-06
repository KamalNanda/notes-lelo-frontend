import React from 'react'
import './Card.css'
function Card(props){
  const data= props.data
  let pass= localStorage.getItem("pass")
  const link = "#/"
  function handleAClick() {
    if(data.isreq === "true") {
      if(pass) window.open(data.link , "_blank")
      window.alert("Please Sign In to view Restricted Content")
    }
    else window.open(data.link , "_blank")
  }
  return(
    <a id="link" onClick={() => handleAClick()} href={link}><div className="card note-card">
      <div className="note-sem-img sem-img">
        <h1>{data.name}</h1>
      </div>
      <h3>Title : <span>{data.name}</span></h3>
      <h3>Subject : <span>{data.subject}</span></h3>
      <h3>Author : <span>{data.author}</span></h3>
    </div></a>
  )
}
export default Card
