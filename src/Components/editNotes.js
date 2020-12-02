import React , {Component} from 'react'
import axios from 'axios'
class AddNote extends Component {
    constructor(props){
        super(props)
        this.state={
            name: this.props.history.location.data.name,
            author: this.props.history.location.data.author,
            course: this.props.history.location.data.course,
            semester: this.props.history.location.data.semester,
            subject: this.props.history.location.data.subject,
            link: this.props.history.location.data.link,
            isreq: this.props.history.location.data.isreq,
            ctype: this.props.history.location.data.ctype
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (e) => {
      console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    async handleSubmit(e) {
        e.preventDefault()
        JSON.stringify(this.state)
        console.log(this.state)
        await axios.patch(`https://notes-lelo.herokuapp.com/api/notes/${this.props.history.location.data._id}` , this.state)
             .then(response => {
                console.log(response)
                this.props.history.history.push('/adminHome/notes')
                this.props.handleSubmit()
            })

    }
    render(){

        return (
            <center><form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    Title : <input defaultValue={this.state.name} type = "text" name = "name" onChange = {this.handleChange}/>
                </div>
                <div className="form-group">
                    Author : <input defaultValue={this.state.author} type = "text" name = "author"  onChange = {this.handleChange}/>
                </div>
                <div className="form-group">
                    Course : <input defaultValue={this.state.course} type = "text" name = "course"  onChange = {this.handleChange}/>
                </div>
                <div className="form-group">
                    Semester : <input defaultValue={this.state.semester} type = "number" name = "semester"  onChange = {this.handleChange}/>
                </div>
                <div className="form-group">
                    Subject : <input defaultValue={this.state.subject} type = "text" name = "subject"  onChange = {this.handleChange}/>
                </div>
                <div className="form-group">
                    Link : <input defaultValue={this.state.link} type = "text" name = "link"  onChange = {this.handleChange}/>
                </div>
                <div className="form-group">
                  isRestricted : true<input defaultValue={this.state.isreq} checked={this.state.isreq === "true"} type="radio" onChange={this.handleChange} name="isreq" value="true" /> : false<input  defaultValue={this.state.isreq} onChange={this.handleChange} checked={this.state.refundableStatus !== "true"} type="radio" name="isreq" value="false" />
                </div>
                <div className="form-group">
                  Type : <select defaultValue={this.state.ctype} onChange={this.handleChange} name="ctype" className="dropdown-input">
                            <option value="Notes">Notes</option>
                            <option value="Books">Book</option>
                            <option value="Question Papers">Question Paper</option>
                          </select>
                </div>
                <div className="form-group">
                    <input type = "submit" />
                </div>
            </form></center>
        )
    }
}
export default AddNote
