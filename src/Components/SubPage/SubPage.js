import React from 'react'
import axios from 'axios'
import Card from '../Card/NoteCard'
export default class SubPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data: []
    }
  }
  async componentDidMount(){
    await axios.get(`https://notes-lelo.herokuapp.com/api/notes/${this.props.location.link}/${this.props.location.sem}/${this.props.location.sub}`).then(response=> this.setState({data: response.data.note}))
      console.log(this.state.data)
  }
  render(){
    return(
      <div>
        <h1>{this.props.location.sub}</h1>
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
