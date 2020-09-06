import React from 'react'
import {Link} from 'react-router-dom'
function noteslist (props){
    const data = props.data
    const handleDelete = (id) => {
        props.handleDelete(id)
    }
    return(
        <div className="notes-list">
            <Link to="/addNote">
                    <button>Add Note</button>
            </Link>
            <table className="my-table">
                <tr>
                    <th>Title</th>
                    <th>Course</th>
                    <th>Semester</th>
                    <th>Subject</th>
                    <th>Author</th>
                    <th>Link</th>
                    <th>Type</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
                {
                    data.map((data, i) => {
                        return(
                            <tr key ={i}>
                                <td>{data.name}</td>
                                <td>{data.course}</td>
                                <td>{data.semester}</td>
                                <td>{data.subject}</td>
                                <td>{data.author}</td>
                                <td><a href={data.link}>Link</a></td>
                                <td>{data.ctype}</td>
                                <td className ="delBtn" onClick={() => handleDelete(data._id)}>Delete</td>
                                <td className ="delBtn"><Link to={{pathname:"/editNotes" , data: data}}>Edit</Link></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}
export default noteslist
