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
            <table className="table">
                <tr>
                    <th>Title</th>
                    <th>Course</th>
                    <th>Semester</th>
                    <th>Subject</th>
                    <th>Author</th>
                    <th>Clicks</th>
                    <th>Likes</th>
                    <th>Dislikes</th>
                    <th>Link</th>
                    <th>Is Restricted</th>
                    <th>Type</th>
                    <th style={{display : (localStorage.getItem("adminRole") === "Intern") ? "none" : ""}}>Delete</th>
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
                                <td>{data.clicks}</td>
                                <td>{data.likes.length}</td>
                                <td>{data.dislikes.length}</td>
                                <td><a style={{textDecoration:"underline", color:"unset"}}href={data.link}>Link</a></td>
                                <td>{data.isreq}</td>
                                <td>{data.ctype}</td>
                                <td style={{display : (localStorage.getItem("adminRole") === "Intern") ? "none" : ""}} className ="delBtn" onClick={() => handleDelete(data._id)}>Delete</td>
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
