import React from 'react'
import NotesList from './noteslist.js'
import UsersList from './UsersList'
import {Switch, Route} from 'react-router'
import {Link} from 'react-router-dom'
function admin(props){
  return(<>
    <h1 className="pageHeader">Noteslelo Admin Panel</h1>
    <Switch>
      <Route path="/adminHome" exact>
        <div className="container">
          <ol>
            <li  className="pageHeader">
              <Link to="/adminHome/notes" className="pageHeader">NOTES</Link>
            </li>
            <li  className="pageHeader">
              <Link to="/adminHome/users" className="pageHeader">USERS</Link>
            </li>
          </ol>
        
        
        </div>
      </Route>
      <Route exact path="/adminHome/notes" component={() => <NotesList handleDelete={(deletedNote) => props.handleDelete(deletedNote)} data={props.data}/>} />
      <Route exact path="/adminHome/users" component={() => <UsersList />} />
    </Switch>
  </>)
}
export default admin
