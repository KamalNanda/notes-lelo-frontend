import React , {Component} from 'react'
import axios from 'axios'
class AddNote extends Component {
    constructor(props){
        super(props)
        this.state={
            title: "",
            author: "",
            course: "",
            semester: null,
            subject: "",
            link: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    async handleSubmit(e) {
        e.preventDefault()
        JSON.stringify(this.state)
        await axios.post('https://notes-lelo.herokuapp.com/api/notes' , this.state)
             .then(response => {
                console.log(response)
                this.props.history.history.push('/')
                this.props.handleSubmit()
            })
        
    }
    render(){
        return (
            <center><form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    Title : <input type = "text" name = "title" onChange = {this.handleChange}/>
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
                    <input type = "submit" />
                </div>
            </form></center>
        )
    }
}
export default AddNote