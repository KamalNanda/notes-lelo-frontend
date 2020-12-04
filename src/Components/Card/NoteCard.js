import React from 'react'
import axios from 'axios'
import './Card.css'
function Card(props){
  const data= props.data 
  let pass= localStorage.getItem("pass")
  const link = window.location.href
  
  async function linkClicked(){
    await axios.put('https://notes-lelo.herokuapp.com/api/clicknote', {
      notesId : data._id
    }).then(res => console.log(res))
  }
  
  function handleAClick() {
    if(data.isreq === "true") {
      if(pass) {
        window.open(data.link , "_blank")
        linkClicked()
      }
      window.alert("Please Sign In to view Restricted Content")
    }
    else {
      window.open(data.link , "_blank")
      linkClicked()
    }
  }
  return(
    <a id="link" onClick={() => handleAClick()} href={link}>
      <div className="card note-card">
        <div className="note-sem-img sem-img">
          <h1>{data.name}</h1>
        </div>
        <div className="note-text">
          <h3>Title : <span>{data.name}</span></h3> 
          <h3>Author : <span>{data.author}</span></h3>
        </div>
    </div></a>
  )
}
export default Card
