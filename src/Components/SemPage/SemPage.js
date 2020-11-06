import React from 'react'
import axios from 'axios'
import Card from '../Card/SubCard'
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
    sessionStorage.setItem("sub",sub)
  }
  async componentDidMount(){    console.log(this.props)
    ReactGA.pageview(window.location.pathname);
    await axios.get(`https://notes-lelo.herokuapp.com/api/notes/${this.props.history.location.state.link}/${this.props.history.location.state.sem.title}`).then(response=> {
      this.setState({data: response.data.note})
      console.log(response)
    })
    this.setState({subjects : [...new Set(this.state.data.map(x => x.subject))]})

  }
  render(){
    return(
      <div>
        <h1 className="pageHeader">Semester - {this.props.history.location.state.sem.title}</h1>
        <div className="grid">
          {
            this.state.subjects.map((subject , i) => {
              
              return (<div 
                onClick={() => this.props.history.push({
                  pathname: `/courses/${this.props.history.location.state.link}/${this.props.history.location.state.sem.title}/${subject}`,
                  state: {sem: this.props.history.location.state.sem, link : this.props.history.location.state.link, sub: subject}
                })}>
                <Card data={subject} key={i} />
              </div>)
            })
          }
        </div>
      </div>
    )
  }
}
//<Link to={{, syl: this.props.location.subs, link: `${this.props.location.link}`, sem: `${this.props.location.sem}`, sub: `${subject}` }} >