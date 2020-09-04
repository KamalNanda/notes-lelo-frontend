import React from 'react'
import axios from 'axios'
import Card from '../Card/NoteCard'
import ReactGA from 'react-ga'
export default class SubPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data: []
    }
  }
  async componentDidMount(){
    ReactGA.pageview(window.location.pathname);   
    await axios.get(`https://notes-lelo.herokuapp.com/api/notes/${sessionStorage.getItem("link")}/${sessionStorage.getItem("sem")}/${sessionStorage.getItem("sub")}/${sessionStorage.getItem("type")}`).then(response=> this.setState({data: response.data.note}))
      console.log(this.state.data)
  }
  render(){
    return(
      <div>
        <h1 style={{textTransform: "capitalize"}}>{this.props.location.type}</h1>
        <div className="grid">
          {
            this.state.data.map((note, i)=>{
              return(
                <Card data={note} key={i} />
              )
            })
          }
        </div>
      </div>
    )
  }
}
