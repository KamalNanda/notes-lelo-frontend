import React from 'react'
import './User.css'
export default class User extends React.Component{
  render(){
    const user = {
      name : localStorage.getItem("user"),
      course : localStorage.getItem("course"),
      sem : localStorage.getItem("sem"),
      imgUrl : localStorage.getItem("imgUrl"),
    }
    return(
      <div className="user" onMouseOver={()=> document.getElementById('user-dropdown').style.display="grid"} onMouseOut={()=> document.getElementById('user-dropdown').style.display="none"}>
        <img src={user.imgUrl} id="userImg" alt="user-img" />
        <div id="user-dropdown"  >
          <h3>{user.name}</h3>
          <h4>{user.course}</h4>
          <h4>Semester - {user.sem}</h4>
          <h4 onClick={() => {localStorage.clear() ; window.open("https://notes-lelo-frontend.netlify.app", "_self")}} style={{marginTop:"10px", display: "flex",color: "var(--red)",cursor: "pointer", flexDirection: "column", alignItems: "end"}}>LOGOUT</h4>
        </div>
      </div>
    )
  }
}
