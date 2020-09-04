import React from 'react'
import axios from 'axios'
import Card from '../Card/SubCard'
import {Link} from 'react-router-dom'
import ReactGA from 'react-ga'
export default class SemPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data: [],
      subjects: []
    }
  }
  onCardClick = (sub) => {
    localStorage.setItem("sub",sub)
  }
  async componentDidMount(){
    ReactGA.pageview(window.location.pathname);
    await axios.get(`https://notes-lelo.herokuapp.com/api/notes/${localStorage.getItem("link")}/${localStorage.getItem("sem")}`).then(response=> this.setState({data: response.data.note}))
    this.setState({subjects : [...new Set(this.state.data.map(x => x.subject))]})
    console.log(this.props)
  }
  render(){
    return(
      <div>
        <h1 className="pageHeader">Semester - {localStorage.getItem("sem")}</h1>
        <div className="grid">
          {
            this.state.subjects.map((subject , i) => {
              return (<div onClick={() => this.onCardClick(subject)}>
                <Link to={{pathname: `/courses/${this.props.location.link}/${this.props.location.sem}/${subject}`, link: `${this.props.location.link}`, sem: `${this.props.location.sem}`, sub: `${subject}` }} ><Card data={subject} key={i} /></Link>
              </div>)
            })
          }
        </div>
      </div>
    )
  }
}
