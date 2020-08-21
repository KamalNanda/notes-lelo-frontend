import React from 'react'
import axios from 'axios'
import Card from '../Card/SubCard'
import {Link} from 'react-router-dom'
export default class SemPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data: [],
      subjects: []
    }
  }
  async componentDidMount(){
    await axios.get(`http://localhost:2000/api/notes/${this.props.location.link}/${this.props.location.sem}`).then(response=> this.setState({data: response.data.note}))
    this.setState({subjects : [... new Set(this.state.data.map(x => x.subject))]})
  }
  render(){
    return(
      <div>
        <h1>Semester - {this.props.location.sem}</h1>
        <div className="grid">
          {
            this.state.subjects.map((subject , i) => {
              return (
                <Link to={{pathname: `/courses/${this.props.location.link}/${this.props.location.sem}/${subject}`, link: `${this.props.location.link}`, sem: `${this.props.location.sem}`, sub: `${subject}` }} ><Card data={subject} key={i} /></Link>
              )
            })
          }
        </div>
      </div>
    )
  }
}
