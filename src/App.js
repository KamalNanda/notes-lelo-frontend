import React from 'react';
import './App.css';
import axios from 'axios'
import Admin from './Components/admin.js'
import AddNotes from './Components/addNote'
import EditNotes from './Components/editNotes'
import {Switch , Route } from 'react-router'
import {Redirect} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Settings from './Components/SetingsPage/Settings'
import Register from './Components/Register'
import NotesPage from './Components/NotesPage'
import SignUpPage from './Components/SignUpPage'
import UserUploads from './Components/UserUploads/UserUploads'
import LandingPage from './Components/LandingPage/LandingPage'
import Analysis from './Components/Analysis Page/AnalysisPage'
import Footer from './Components/Footer/Footer'
import AboutPage from './Components/AboutPage/AboutPage'
import DisclaimerPage from './Components/Disclaimer/Disclaimer'
import CoursesPage from './Components/CoursesPage/CoursesPage'
import CoursePage from './Components/CoursePage/CoursePage'
import SemPage from './Components/SemPage/SemPage'
import ContactPage from './Components/ContactPage/ContactPage'
import SubPage from './Components/SubPage/SubPage'
import AdminLogin from './Components/adminLogin'
import {apiUrl, url} from './config.json'
import TypePage from './Components/TypePage/TypePage'
import ReactGA from 'react-ga';
import Loading from './Components/Loading'
const uri = apiUrl
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
        ReactGA.initialize('UA-177208146-1');
    }
    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
    }
    handleSubmit = () => {
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
      localStorage.setItem("userId", data.user._id)
      localStorage.setItem("sem", data.user.semester)
      localStorage.setItem("course", data.user.course)
      localStorage.setItem("college", data.user.college)
      localStorage.setItem("gender", data.user.gender)
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
        semester: registerData.semester,
        gender: registerData.gender,
        id: this.state.userSocialData.pass
      }
      JSON.stringify(user)
      await axios.post(`${uri}/api/socialLogin` , user)
                  .then(response => {
                    console.log(response)
                    const pass = response.data.pass
                    localStorage.setItem("pass" , pass)
                    localStorage.setItem("user", response.data.newUser.name)
                    localStorage.setItem("sem", response.data.newUser.semester)
                    localStorage.setItem("userId", response.data.newUser._id)
                    localStorage.setItem("course", response.data.newUser.course)
                    localStorage.setItem("college", response.data.newUser.college)
                    localStorage.setItem("gender", response.data.newUser.gender)
                    localStorage.setItem("imgUrl", response.data.newUser.imgUrl)
                    this.setState({isLogined : true})
                    window.open(url , "_self")
                  })
    }
    componentDidMount(){
        this.loadData();
        if(localStorage.getItem('pass')){
          let name = localStorage.getItem('user').slice('-')
          let sem = localStorage.getItem('sem')
          let course = localStorage.getItem('course')
          let college = localStorage.getItem('college').slice('-') 
          ReactGA.ga('set', 'userId', `${name}-${sem}-${course}-${college}`); // Set the user ID using signed-in user_id.
          ReactGA.ga('set', 'user', `${name}-${sem}-${course}-${college}`);
        }

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
        await axios.delete(`${uri}/api/notes/deletehehehe/notes/${noteDeleted}`)
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
                      <Route path="/adminHome">
                          {localStorage.getItem('adminToken') ? <Admin handleDelete={(deletedNote) => this.handleDelete(deletedNote)} data={this.state.data}/>: <Redirect to="/nl-admin" /> }
                      </Route>
                    <Route exact path="/nl-admin">
                        {localStorage.getItem('adminToken') ? <Redirect to="/adminHome" /> : <AdminLogin />}
                      </Route>
                      <Route exact path="/" component={(history) =>   <LandingPage history={history}/>} />
                      <Route exact path="/editNotes" component={(history, props) =>   <EditNotes {...props} handleSubmit={() => this.handleSubmit()} history={history}/>} />
                      <Route exact path="/courses" component={(history) => <CoursesPage history={history}/>} />
                      <Route exact path="/about" component={() => <AboutPage/>}/>
                      <Route exact path="/disclaimer" component={() => <DisclaimerPage/>}/>
                      <Route exact path="/courses/:course" component={(props)=> <CoursePage {...props}/>} />
                      <Route exact path="/courses/:course/:sem" component={(props)=> <SemPage {...props}/>} />
                      <Route exact path="/courses/:course/:sem/:sub" component={(props) => <TypePage {...props} />} />
                      <Route exact path="/settings" component={(history) => <Settings history={history} />} />
                      <Route exact path="/upload" component={(history) => <UserUploads history={history} />} />
                      <Route exact path="/contact" component={ContactPage} />
                      <Route exact path="/courses/:course/:sem/:sub/analysis" component={Analysis} />
                      <Route exact path="/courses/:course/:sem/:sub/:type" component={(props, history) => <SubPage {...props} />} />
                      <Route exact path="/signup" component={(history) => <SignUpPage history={history}  handleSocialRegister={(data) => this.handleSocialRegister(data)}  handleSocialLogin={(data) => this.handleSocialLogin(data)}/>} />
                      <Route exact  path="/notes" component = {(history) => <NotesPage history={history} data={this.state.data}/>} />
                      <Route exact path="/addNote" component = {(history) => <AddNotes history={history} handleSubmit={() => this.handleSubmit()} />} />
                      <Route exact path="/register" component = {(history) => <Register history={history} handleRegisterSubmit={(registerData) => this.handleRegisterSubmit(registerData)}/>} />
                  </Switch>
                  <Footer/>
                </div>
            </div>
        )}
    }
}
export default App;
