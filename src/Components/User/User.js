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
        <div className="user-header"><h4>Semester - {user.sem}</h4> <img src={user.imgUrl} id="userImg" alt="user-img" /></div>
        <div id="user-dropdown"  > 
          <h4 onClick={() => {localStorage.clear() ; sessionStorage.clear();  window.open("http://localhost:3000/", "_self")}} style={{textAlign:"right",marginTop:"10px" ,color: "var(--red)",cursor: "pointer"}}>LOGOUT</h4>
        </div>
      </div>
    )
  }
}
