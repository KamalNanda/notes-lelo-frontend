import React from 'react'
import './User.css'
import {useHistory} from 'react-router-dom'

const User = () => {
  const history = useHistory()
  const user = {
    name : localStorage.getItem("user"),
    course : localStorage.getItem("course"),
    sem : {
      title:localStorage.getItem("sem")
    },
    imgUrl : localStorage.getItem("imgUrl"),
  }
  
  return(
    <div className="user" onMouseOver={()=> document.getElementById('user-dropdown').style.display="grid"} onMouseOut={()=> document.getElementById('user-dropdown').style.display="none"}>
      <div className="user-header"><h5  onClick={() => history.push({pathname: `/courses/${user.course}/${user.sem.title}`, state:{ sem: user.sem, link : user.course }})}>Semester - {user.sem.title}</h5> <img src={user.imgUrl} id="userImg" alt="user-img" /></div>
      <div className="user-spacer"></div>
      <div id="user-dropdown"  > 
        <h3 style={{textAlign:"right",marginTop:"10px" ,color: "var(--nav-font)"}}>{localStorage.getItem("user")}</h3>
        <h4 onClick={()=> history.push('/settings') } style={{textAlign:"right",marginTop:"10px" ,color: "var(--red)",cursor: "pointer"}}>Edit Profile</h4>
        <h4 onClick={() => {localStorage.clear() ; sessionStorage.clear();  window.open("https://notes-lelo-frontend.netlify.app/", "_self")}} style={{textAlign:"right",marginTop:"10px" ,color: "var(--red)",cursor: "pointer"}}>LOGOUT</h4>
      </div>
    </div>
  )
}
export default User
