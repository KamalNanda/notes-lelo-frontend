import React from 'react';
import './App.css';
import axios from 'axios'
import NotesList from './Components/noteslist.js'
import AddNotes from './Components/addNote'
import {Switch , Route } from 'react-router'
import Register from './Components/Register'
import NotesPage from './Components/NotesPage'
import SignUpPage from './Components/SignUpPage'
const uri = "https://notes-lelo.herokuapp.com"
class App extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            data : [],
            loading: false,
            userSocialData: {}
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRegisterSubmit= this.handleRegisterSubmit.bind(this)
    }
    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
    }
    handleSubmit = (noteSubmitted) => {
        this.loadData()
    }
    handleSocialLogin = (userData) => {
      this.setState({
        userSocialData : userData
      })
      console.log(userData)
    }
    async handleRegisterSubmit(registerData){
      let user = {
        name: this.state.userSocialData.name,
        email: this.state.userSocialData.email,
        password: this.state.userSocialData.pass,
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
                    setTimeout(() => {
                      localStorage.clear()
                    }, 300000)
                  })
        
    window.open('https://notes-lelo-frontend.netlify.app/' , "_self")
    }
    async componentDidMount(){
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
            return <h2>LOADING</h2>
        }
        else {
        return(
            <div>
                <Switch>
                    <Route exact path="/admin" component = {(history) => (<>
                        <h1>Notes Lelo Admin Panel</h1>
                        <NotesList handleDelete={(deletedNote) => this.handleDelete(deletedNote)} data={this.state.data}/>
                    </>)} />
                    <Route path="/signup" component={(history) => <SignUpPage history={history} handleSocialLogin={(socialData) => this.handleSocialLogin(socialData)}/>} />
                    <Route exact path="/" component = {(history) => <NotesPage history={history} data={this.state.data}/>} />
                    <Route path="/addNote" component = {(history) => <AddNotes history={history} handleSubmit={(addednote) => this.handleSubmit(addednote)} />} />
                    <Route path="/register" component = {(history) => <Register history={history} handleRegisterSubmit={(registerData) => this.handleRegisterSubmit(registerData)}/>} />
                </Switch>
            </div>
        )}
    }
}
export default App;
