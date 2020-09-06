import React from 'react'
import NotesList from './noteslist.js'
function admin(props){
  return(
    <h1>Notes Lelo Admin Panel</h1>
    <NotesList handleDelete={(deletedNote) => props.handleDelete(deletedNote)} data={props.data}/>
  )
}
export default admin
