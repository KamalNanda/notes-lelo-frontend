import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Card from '../Card/SubCard'
import ReactGA from 'react-ga'
export default class SubPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data: [],
      contents: []
    }
  }
  onCardClick = (type) => {
    sessionStorage.setItem("type",type)
  }
  async componentDidMount(){
    ReactGA.pageview(window.location.pathname); 
    await axios.get(`https://notes-lelo.herokuapp.com/api/notes/${sessionStorage.getItem("link")}/${sessionStorage.getItem("sem")}/${sessionStorage.getItem("sub")}`).then(response=> this.setState({data: response.data.note}))
    this.setState({contents : [...new Set(this.state.data.map(x => x.ctype))]})
    console.log(this.state)
  }
  render(){
    return(
      <div>
        <h1 className="pageHeader">{sessionStorage.getItem("sub")}</h1>
        <div className="grid">
          {
            this.state.contents.map((note, i)=>{
              return(<div onClick={() => this.onCardClick(note)}>
                <Link to={{pathname: `${this.props.location.pathname}/${note}` ,link: `${this.props.location.link}`, sem: `${this.props.location.sem}`, sub: `${this.props.location.sub}`, type: note}}><Card data={note} key={i} /></Link>
              </div>)
            })
          }
        </div>
      </div>
    )
  }
}
