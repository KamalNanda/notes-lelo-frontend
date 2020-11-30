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
      <div className="user" style={{color:"white", display:"flex", alignItems: "Center"}}>
        <img style={{borderRadius: "0px",display: localStorage.getItem("imgUrl")? "" : "none"}} src={user.imgUrl} id="userImg" alt="user-img" />
        <div style={{marginLeft: "20px"}}>
          <h3>{user.name}</h3>
          <h3 style={{display: user.imgUrl? "" : "none"}}>{user.course} , {user.sem}</h3>
        </div>
      </div>
    )
  }
}
