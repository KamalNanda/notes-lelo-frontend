import React from 'react'
import NotesList from './noteslist.js'
import UsersList from './UsersList'
import MessagesList from './Messageslist'
import {Switch, Route} from 'react-router'
import {Link} from 'react-router-dom'
function admin(props){
  return(<>
    <div style={{display:"flex",width:"90%", justifyContent:"space-between"}}>
      <h1 className="pageHeader">Noteslelo Admin Panel</h1>
      <h2 style={{cursor:"pointer"}} className="pageHeader" onClick={() => {localStorage.clear() ; window.location.reload()} }>LOGOUT</h2>
    </div>
    <Switch>
      <Route path="/adminHome" exact>
        <div className="container">
          <ol>
            <li  className="pageHeader">
              <Link to="/adminHome/notes" className="pageHeader">NOTES</Link>
            </li>
            <li style={{display : (localStorage.getItem("adminRole") === "Intern") ? "none" : ""}} className="pageHeader" >
              <Link to="/adminHome/users" className="pageHeader">USERS</Link>
            </li>
            <li style={{display : (localStorage.getItem("adminRole") === "Intern") ? "none" : ""}} className="pageHeader" >
              <Link to="/adminHome/messages" className="pageHeader">MESSAGES</Link>
            </li>
          </ol>
        
        
        </div>
      </Route>
      <Route exact path="/adminHome/notes" component={() => <NotesList handleDelete={(deletedNote) => props.handleDelete(deletedNote)} data={props.data}/>} />
      <Route exact path="/adminHome/users" component={() => <UsersList />} />
      <Route exact path="/adminHome/messages" component={() => <MessagesList />} />
    </Switch>
  </>)
}
export default admin
