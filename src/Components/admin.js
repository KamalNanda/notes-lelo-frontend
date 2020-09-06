import React from 'react'
import NotesList from './Components/noteslist.js'
function admin(props){
  return(
    <h1>Notes Lelo Admin Panel</h1>
    <NotesList handleDelete={(deletedNote) => this.props.handleDelete(deletedNote)} data={this.props.data}/>
  )
}
export default admin
