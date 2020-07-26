import React from 'react';
import './App.css';
import axios from 'axios'
import NotesList from './Components/noteslist.js'
import AddNotes from './Components/addNote'
import {Switch , Route } from 'react-router'
class App extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            data : [],
            loading: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
    }
    handleSubmit = (noteSubmitted) => {
        this.loadData()
    }
    async componentDidMount(){
        this.loadData()    
    }
    async loadData(){
        this.setState({loading: true})
        await axios.get('https://notes-lelo.herokuapp.com/api/notes')
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
        await axios.delete(`https://notes-lelo.herokuapp.com/api/notes/${noteDeleted}`)
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
                <h1>Notes Lelo Admin Panel</h1>
                <Switch>
                    <Route exact path="/" component = {() => <NotesList handleDelete={(deletedNote) => this.handleDelete(deletedNote)} data={this.state.data}/>} />
                    <Route path="/addNote" component = {(history) => <AddNotes history={history} handleSubmit={(addednote) => this.handleSubmit(addednote)} />} />
                </Switch>
            </div>
        )}
    }
}
export default App;
