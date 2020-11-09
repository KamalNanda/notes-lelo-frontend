import React, {Component} from 'react'
import axios from 'axios'
export default class UsersList extends Component{
    constructor(props){
        super(props)
        this.state={
            users: []
        }
    }
    async componentDidMount(){
        await axios.get('https://notes-lelo.herokuapp.com/api/users').then(res => {
            console.log(res)
            this.setState({users: res.data.users})
        })
    }
    render(){
        
        return(
            <div>
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
                    </tr>
                    {this.state.users.map((user,i) => (
                        <tr key={i}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.college}</td>
                            <td>{user.course}</td>
                            <td>{user.semester}</td>
                        </tr>
                    ))}
                </table>
                </div>
            </div>
        )
    }
}