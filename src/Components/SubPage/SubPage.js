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
    await axios.get(`https://notes-lelo.herokuapp.com/api/notes/${localStorage.getItem("link")}/${localStorage.getItem("sem")}/${localStorage.getItem("sub")}/${localStorage.getItem("type")}`).then(response=> this.setState({data: response.data.note}))
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
