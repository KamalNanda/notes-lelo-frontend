import React from 'react'
import './User.css'
import {useHistory} from 'react-router-dom'
const User = () => {
    const history= useHistory()
    const user = {
      name : localStorage.getItem("user"),
      course : localStorage.getItem("course"),
      sem : {
           title:localStorage.getItem("sem")
          },
      imgUrl : localStorage.getItem("imgUrl"),
    }
    return(
      <div className="user" style={{color:"white", display:"flex", alignItems: "Center"}}>
        <img style={{borderRadius: "0px",display: localStorage.getItem("imgUrl")? "" : "none"}} src={user.imgUrl} id="userImg" alt="user-img" />
        <div style={{marginLeft: "20px"}}>
          <h3>{user.name}</h3>
          <h3 style={{background :"var(--red)",display: user.imgUrl? "" : "none", padding:"5px", borderRadius:"15px"}}  onClick={() => history.push({pathname: `/courses/${user.course}/${user.sem.title}`, state:{ sem: user.sem, link : user.course }})}>{user.course} , {user.sem.title}</h3>
        </div>
      </div>
    )
  }

export default User
