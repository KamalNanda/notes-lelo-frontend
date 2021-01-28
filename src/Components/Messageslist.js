import React, {Component} from 'react'
import axios from 'axios'
import {apiUrl} from '../config.json'
export default class MessagesList extends Component{
    constructor(props){
        super(props)
        this.state={
            messages: []
        }
        this.loadData = this.loadData.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    async handleDelete (messageDeleted) {
        console.log(messageDeleted)
        await axios.delete(`${apiUrl}/api/messages/${messageDeleted}`)
        .then(response => {
            console.log(response)
            this.loadData()
        })
    }
    async loadData() {
        await axios.get(`${apiUrl}/api/messages`).then(res => {
            console.log(res)
            this.setState({messages: res.data.messages})
        })
    }
    async componentDidMount(){
        this.loadData()
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
                        <th>Message</th>
                        <th>Sent Date</th>
                        <th>Sent Time</th> 
                        <th>Delete</th> 
                    </tr>
                    {this.state.messages.map((message,i) => {
                        let d = new Date(message.sentDate)
                        return(
                        <tr key={i}>
                            <td>{message.name}</td>
                            <td>{message.email}</td>
                            <td>{message.message}</td>
                            <td>{d.toLocaleDateString()}</td>
                            <td>{d.toLocaleTimeString()}</td>
                            <td  className ="delBtn"  onClick={() => this.handleDelete(message._id)}>Delete</td>
                        </tr>
                    )})}
                </table>
                </div>
            </div>
        )
    }
}
