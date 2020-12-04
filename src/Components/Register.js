import React, {Component} from 'react'
export default class Register extends Component{
  constructor(props){
    super(props)
    this.state={
      Ucourse: '',
      Usemester: '1',
      college: '',
      gender: 'Male',
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
    console.log(this.state)
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
            Course :  
            <select className="semester-drop" name = "Ucourse" onChange = {this.handleChange} >
              <option value="BCA">BCA</option>
              <option value="BCOM">BCOM</option>
              <option value="BBA">BBA</option>
              <option value="BJMC">BJMC</option>
              <option value="ENG HONS.">ENG HONS.</option>
              <option value="other">other</option>
            </select>
        </div>
        <div className="form-group">
            Semester : 
            <select className="semester-drop" name = "Usemester" onChange = {this.handleChange} >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
        </div>
        <div className="form-group">
            College : <input type = "text" required name = "college" onChange = {this.handleChange}/>
        </div>
        <div className="form-group">
            Gender : 
            <select className="gender-drop" name = "gender" onChange = {this.handleChange} >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
        </div>
        <div className="form-group">
            <input className="submit-btn" type = "submit" value="Submit" />
        </div>
        </form>
      </div>
    )
  }
}
