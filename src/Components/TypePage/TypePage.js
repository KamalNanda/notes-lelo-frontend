import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Card from '../Card/SubCard'
export default class SubPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data: []
    }
  }
  onCardClick = (type) => {
    localStorage.setItem("type",type)
  }
  async componentDidMount(){
    await axios.get(`https://notes-lelo.herokuapp.com/api/notes/${localStorage.getItem("link")}/${localStorage.getItem("sem")}/${localStorage.getItem("sub")}`).then(response=> this.setState({data: response.data.note}))
    console.log(this.props)
  }
  render(){
    return(
      <div>
        <h1 className="pageHeader">{localStorage.getItem("sub")}</h1>
        <div className="grid">
          {
            this.state.data.map((note, i)=>{
              return(<div onClick={() => this.onCardClick(note.ctype)}>
                <Link to={{pathname: `${this.props.location.pathname}/${note.ctype}` ,link: `${this.props.location.link}`, sem: `${this.props.location.sem}`, sub: `${this.props.location.sub}`, type: note.ctype}}><Card data={note.ctype} key={i} /></Link>
              </div>)
            })
          }
        </div>
      </div>
    )
  }
}
