import React, {Component} from 'react'
import axios from 'axios'
export default class UsersList extends Component{
    constructor(props){
        super(props)
        this.state={
            users: []
        }
        this.loadData = this.loadData.bind(this)
    }
    async loadData(){
        await axios.get('https://notes-lelo.herokuapp.com/api/users').then(res => {
            console.log(res)
            this.setState({users: res.data.users})
        })
    }
    componentDidMount(){
        this.loadData()
    }
    
    async handleDelete(id){
        let assurance = window.prompt("Are you sure you want to delete this user (yes/no)")
        if(assurance === "Yes" || assurance === "yes" || assurance === "y")
       {
        await axios.delete(`https://notes-lelo.herokuapp.com/api/users/deletehehehe/${id}`).then(res => console.log(res))
        this.loadData()
       }
    }
    render(){
        
        return(
            <div>

                <div style={{display:"flex",width:"90%", justifyContent:"space-between"}}>
                    <h1 className="pageHeader">USERS</h1>
                    <h2 className="pageHeader" >{this.state.users.length}</h2>
                </div>
                <h1 className="pageHeader">USERS</h1>
                <div className="container">
                <table className="table">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>G-ID</th>
                        <th>College</th>
                        <th>Course</th>
                        <th>Semester</th>
                        <th>Gender</th>
                        <th>Delete</th>
                    </tr>
                    {this.state.users.map((user,i) => (
                        <tr key={i}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.college}</td>
                            <td>{user.course}</td>
                            <td>{user.semester}</td>
                            <td>{user.gender}</td>
                            <td style={{cursor: "pointer"}} onClick={() =>this.handleDelete(user._id)}>Delete</td>
                        </tr>
                    ))}
                </table>
                </div>
            </div>
        )
    }
}
