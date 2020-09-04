import React from 'react';
import './App.css';
import axios from 'axios'
import NotesList from './Components/noteslist.js'
import AddNotes from './Components/addNote'
import {Switch , Route } from 'react-router'
import Navbar from './Components/Navbar/Navbar'
import Register from './Components/Register'
import NotesPage from './Components/NotesPage'
import SignUpPage from './Components/SignUpPage'
import LandingPage from './Components/LandingPage/LandingPage'
import Footer from './Components/Footer/Footer'
import CoursesPage from './Components/CoursesPage/CoursesPage'
import CoursePage from './Components/CoursePage/CoursePage'
import SemPage from './Components/SemPage/SemPage'
import SubPage from './Components/SubPage/SubPage'
import TypePage from './Components/TypePage/TypePage'
import Loading from './Components/Loading'
import ReactGA from 'react-ga';
const uri = "https://notes-lelo.herokuapp.com"
class App extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            data : [],
            loading: false,
            userSocialData: {},
            isLogined: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRegisterSubmit= this.handleRegisterSubmit.bind(this)
        this.handleSocialRegister = this.handleSocialRegister.bind(this)
    }
    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
    }
    handleSubmit = (noteSubmitted) => {
        this.loadData()
    }
    handleSocialRegister = (userData) => {
      this.setState({
        userSocialData : userData
      })
      console.log(userData)
    }

    handleSocialLogin = (data) => {
      console.log(data)
      const pass = data.pass
      localStorage.setItem("pass" , pass)
      localStorage.setItem("user", data.user.name)
      localStorage.setItem("sem", data.user.semester)
      localStorage.setItem("course", data.user.course)
      localStorage.setItem("imgUrl", data.user.imgUrl)
    }

    async handleRegisterSubmit(registerData){
      let user = {
        name: this.state.userSocialData.name,
        email: this.state.userSocialData.email,
        password: this.state.userSocialData.pass,
        imgUrl: this.state.userSocialData.imgUrl,
        course: registerData.course,
        college: registerData.college,
        semester: registerData.semester
      }
      JSON.stringify(user)
      await axios.post(`${uri}/api/socialLogin` , user)
                  .then(response => {
                    console.log(response)
                    const pass = response.data.pass
                    localStorage.setItem("pass" , pass)
                    localStorage.setItem("user", response.data.user.name)
                    localStorage.setItem("sem", response.data.user.semester)
                    localStorage.setItem("course", response.data.user.course)
                    localStorage.setItem("imgUrl", response.data.user.imgUrl)
                    this.setState({isLogined : true})
                    window.open('http://localhost:3000/' , "_self")
                  })
    }
    componentDidMount(){
        this.loadData()
    }
    async loadData(){
        this.setState({loading: true})
        await axios.get(`${uri}/api/notes`)
             .then(response => {
                this.setState({
                    data : response.data.notes,
                    loading: false
                })
                console.log(response)
            })
    }
    async handleDelete(noteDeleted){
        console.log(noteDeleted)
        await axios.delete(`${uri}/api/notes/${noteDeleted}`)
                    .then(response => {
                        console.log(response)
                        this.loadData()
                    })
    }
    render(){
        if(this.state.loading){
            return <Loading/>
        }
        else {
        return(
            <div style={{ marginBottom: "80px"}}>
                <Navbar  handleSocialRegister={(data) => this.handleSocialRegister(data)}  handleSocialLogin={(data) => this.handleSocialLogin(data)}/>
                <div className="mainBodyDiv" style={{marginTop: "10%"}}>
                  <Switch>
                      <Route exact path="/admin" component = {(history) => (<>
                          <h1>Notes Lelo Admin Panel</h1>
                          <NotesList handleDelete={(deletedNote) => this.handleDelete(deletedNote)} data={this.state.data}/>
                      </>)} />
                      <Route exact path="/" component={() =>   <LandingPage/>} />
                      <Route exact path="/courses" component={() => <CoursesPage/>} />
                      <Route exact path="/courses/:course" component={(props)=> <CoursePage {...props}/>} />
                      <Route exact path="/courses/:course/:sem" component={(props)=> <SemPage {...props}/>} />
                      <Route exact path="/courses/:course/:sem/:sub" component={(props) => <TypePage {...props} />} />
                      <Route exact path="/courses/:course/:sem/:sub/:type" component={(props) => <SubPage {...props} />} />
                      <Route exact path="/signup" component={(history) => <SignUpPage history={history}  handleSocialRegister={(data) => this.handleSocialRegister(data)}  handleSocialLogin={(data) => this.handleSocialLogin(data)}/>} />
                      <Route exact  path="/notes" component = {(history) => <NotesPage history={history} data={this.state.data}/>} />
                      <Route exact path="/addNote" component = {(history) => <AddNotes history={history} handleSubmit={(addednote) => this.handleSubmit(addednote)} />} />
                      <Route exact path="/register" component = {(history) => <Register history={history} handleRegisterSubmit={(registerData) => this.handleRegisterSubmit(registerData)}/>} />
                  </Switch>
                  <Footer/>
                </div>
            </div>
        )}
    }
}
export default App;
