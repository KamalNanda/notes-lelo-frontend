import React, {Component} from 'react'
export default class Register extends Component{
  constructor(props){
    super(props)
    this.state={
      Ucourse: '',
      Usemester: '1',
      college: '',
      gender: '',
    }
  }
  componentDidMount(){
    this.onCloseClick()
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
    console.log(this.state)
  }
  onCloseClick = () =>{
		var phoneNav = document.getElementById('phoneNav')
		var hamburger = document.getElementById('hamburger')
		var navClose = document.getElementById('navClose')
		phoneNav.style.animation = "moveUp 1s"
		setTimeout(()=>{
			phoneNav.style.display="none"
			hamburger.style.display = "block"
			navClose.style.display = "none"
		},1000)
	}
  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.Ucourse !== "" && this.state.Usemester !== "" && this.state.college !== "" && this.state.gender !== ""){
      let data = {
        course: this.state.Ucourse,
        semester: this.state.Usemester,
        college: this.state.college,
        gender: this.state.gender
      }
      this.props.handleRegisterSubmit(data)
    }
    else document.getElementById("error-msg").style.display = "block"
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
            Course :  
            <select className="semester-drop" required name = "Ucourse" onChange = {this.handleChange} >
              <option value="">Select a Course</option>
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
            <select className="semester-drop" required name = "Usemester" onChange = {this.handleChange} >
              <option value="">Select semester</option>
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
            <select className="gender-drop" required name = "gender" onChange = {this.handleChange} >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option> 
              <option value="Other">Other</option>
            </select>
        </div>
        <p id="error-msg">Please fill all the details</p>
        <div className="form-group">
            <input className="submit-btn" type = "submit" value="Submit" />
        </div>
        </form>
      </div>
    )
  }
}
