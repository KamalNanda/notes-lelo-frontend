import React from 'react'
import NotesGrid from './Notes'
function NotesPage(props){
   let data = props.data
  return(
    <div>
      <h1>Notes Lelo</h1>
      <div className="notes-grid">
        {
          data.map((data, i) => {
            return <NotesGrid history={props.history} data={data}/>
          })
        }
      </div>
    </div>
  )
}
export default NotesPage
