import React , {Component} from 'react'
import axios from 'axios'
class AddNote extends Component {
    constructor(props){
        super(props)
        this.state={
             name: "",
            author: "",
            course: "",
            semester: null,
            subject: "",
            link: "",
            isreq: "",
            ctype: "note"
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
        await axios.post('https://notes-lelo.herokuapp.com' , this.state)
             .then(response => {
                console.log(response)
                this.props.history.history.push('/admin')
                this.props.handleSubmit()
            })

    }
    render(){
        return (
            <center><form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    Title : <input type = "text" name = "name" onChange = {this.handleChange}/>
                </div>
                <div className="form-group">
                    Author : <input type = "text" name = "author"  onChange = {this.handleChange}/>
                </div>
                <div className="form-group">
                    Course : <input type = "text" name = "course"  onChange = {this.handleChange}/>
                </div>
                <div className="form-group">
                    Semester : <input type = "number" name = "semester"  onChange = {this.handleChange}/>
                </div>
                <div className="form-group">
                    Subject : <input type = "text" name = "subject"  onChange = {this.handleChange}/>
                </div>
                <div className="form-group">
                    Link : <input type = "text" name = "link"  onChange = {this.handleChange}/>
                </div>
                <div className="form-group">
                  isRestricted : true<input type="radio" onChange={this.handleChange} name="isreq" value="true" /> : false<input  onChange={this.handleChange} type="radio" name="isreq" value="false" />
                </div>
                <div className="form-group">
                  Type : <select onChange={this.handleChange} name="ctype" className="dropdown-input">
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
