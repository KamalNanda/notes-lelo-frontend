import React, {Component} from 'react'
export default class Register extends Component{
  constructor(props){
    super(props)
    this.state={
      Ucourse: '',
      Usemester: '',
      college: '',
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
      college: this.state.college
    }
    this.props.handleRegisterSubmit(data)
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
            Course : <input type = "text" name = "Ucourse" onChange = {this.handleChange}/>
        </div>
        <div className="form-group">
            Semester : <input type = "number" name = "Usemester" onChange = {this.handleChange}/>
        </div>
        <div className="form-group">
            College : <input type = "text" name = "college" onChange = {this.handleChange}/>
        </div>
        <div className="form-group">
            <input type = "submit" />
        </div>
        </form>
      </div>
    )
  }
}
