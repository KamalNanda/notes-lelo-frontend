import React, {Component} from 'react'
export default class Register extends Component{
  constructor(props){
    super(props)
    this.state={
      Ucourse: '',
      Usemester: '',
      college: '',
      gender: '',
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    let data = {
      course: this.state.Ucourse,
      semester: this.state.Usemester,
      college: this.state.college,
      gender: this.state.gender
    }
    this.props.handleRegisterSubmit(data)
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
            Course : <input type = "text" required name = "Ucourse" onChange = {this.handleChange}/>
        </div>
        <div className="form-group">
            Semester : <input type = "number" required name = "Usemester" onChange = {this.handleChange}/>
        </div>
        <div className="form-group">
            College : <input type = "text" required name = "college" onChange = {this.handleChange}/>
        </div>
        <div className="form-group">
            Gender : <input type = "text" required name = "gender" onChange = {this.handleChange} placeholder="Male/Female"/>
        </div>
        <div className="form-group">
            <input className="submit-btn" type = "submit" value="Submit" />
        </div>
        </form>
      </div>
    )
  }
}
