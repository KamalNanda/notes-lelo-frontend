import React from 'react'
import axios from 'axios'
import Card from '../Card/NoteCard'
import ReactGA from 'react-ga'
export default class SubPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data: [], 
      syl: {}
    }
  }
  async componentDidMount(){
    console.log('props', this.props)
    ReactGA.pageview(window.location.pathname);
    await axios.get(`https://notes-lelo.herokuapp.com/api/notes/${this.props.history.location.state.link}/${this.props.history.location.state.sem}/${this.props.history.location.state.sub}/${this.props.history.location.state.type}`).then(response=> this.setState({data: response.data.note}))
      console.log(this.state.data)


  }
  render(){
    return(
      <div>
        <h1>{this.props.location.type}</h1>
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
