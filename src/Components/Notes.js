import React from 'react'
import '../notes.css'
function NotesGrid(props){
  const data= props.data
  let pass= localStorage.getItem("pass")
  const [link, setLink] =React.useState("#/")
  function handleAClick() {
    if(data.isreq === "true") {
      if(pass) window.open(data.link , "_blank")
      else props.history.history.push('/signup')
    }
    else window.open(data.link , "_blank")
  }
  return(
      <div className="note">
        <h3>Title : <span>{data.title}</span></h3>
        <h3>Subject : <span>{data.subject}</span></h3>
        <h3>Semester : <span>{data.semester}</span></h3>
        <h3>Course : <span>{data.course}</span></h3>
        <h3>Author : <span>{data.author}</span></h3>
        <h3><a id="link" onClick={() => handleAClick()} href={link}>Link</a></h3>
      </div>
  )
}
export default NotesGrid
