import React from 'react'
import {apiUrl} from '../../config.json'
import axios from 'axios'
import subjects from '../courseSubs'
export default class UserUploads extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: "",
            author:localStorage.getItem("user"),
            course: localStorage.getItem("course"),
            semester: "",
            subject: "",
            link: "",
            isreq: "true",
            ctype: "",
            subjects: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        if(!localStorage.getItem("pass")){
            this.props.history.history.push('/')
        }
        let sublist = subjects.filter(sub => sub.title === this.state.course)
        this.setState({
            subjects : sublist[0].subjects
        })
    }
    handleChange = (e) => { 
          this.setState({
              [e.target.name] : e.target.value
          })
      }
      async handleSubmit(e) {
          e.preventDefault()
          if(this.state.name !=="" && this.state.semester !=="" && this.state.subject !=="" && this.state.link !=="" && this.state.ctype !== ""){
            document.getElementById('error-msg').style.display = "none"
            JSON.stringify(this.state)
            console.log(this.state)
            await axios.post(`${apiUrl}/api/notes` , this.state)
                 .then(response => {
                     document.getElementById('success-msg').style.display="block"
                    console.log(response)
                    this.props.history.history.push('/')
                })
          }else{
              document.getElementById('error-msg').style.display = "block"
          }
  
      }
    render(){
        return(
            <div>
                <h1 className="pageHeader">Upload your Notes here</h1>
                <p style={{marginLeft:"10%",color:"var(--nav-font)"}}>Please paste google drive link in the link field and make sure that your link is public</p>
                <center><form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    Title : <input required type = "text" name = "name" onChange = {this.handleChange}/>
                </div>
                <div className="form-group">
                    Author : <input disabled required value={localStorage.getItem("user")} type = "text" name = "author"  />
                </div>
                <div className="form-group">
                    Course :  <input disabled required value={this.state.course} type = "text" name = "course"  onChange = {this.handleChange}/> 
                </div>
                <div className="form-group">
                    Semester : 
                    <select className="semester-drop" name = "semester" required onChange = {this.handleChange} >
                        <option value="">Select Semester</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                </div>
                <div className="form-group">
                    Subject : {
                        this.state.subjects.length === 0 
                            ? (<input required type = "text" name = "subject"  onChange = {this.handleChange}/>)
                            : (<select  style={{width: "60%"}} className="dropdown-input" required  name = "subject"  onChange = {this.handleChange}>
                                {this.state.subjects.map((subs, i) => {
                                    return(<option value={subs}>{subs}</option>)
                                })}
                            </select>)
                    }
                </div>
                <div className="form-group">
                    Link : <input required type = "text" name = "link"  onChange = {this.handleChange}/>
                </div>
                
                <div className="form-group">
                  Type : <select required onChange={this.handleChange} name="ctype" className="semester-drop">
                            <option value="">Select content type</option>
                            <option value="Notes">Notes</option>
                            <option value="Books">Book</option>
                            <option value="Question Papers">Question Paper</option>
                          </select>
                </div>
                
                <p id="success-msg">Kuddos! Your Note has been Uploaded</p>
                <p id="error-msg">Please fill all the fields </p>
                <div className="form-group">
                    <input className="submit-btn"  type = "submit" />
                </div>
            </form>
            
            </center>
            
            </div>
        )
    }
}