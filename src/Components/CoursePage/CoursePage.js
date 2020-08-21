import React from 'react'
import Card from '../Card/SubCard'
import {Link} from 'react-router-dom'
export default class CoursePage extends React.Component{
  render(){
    console.log(this.props.location.sems)
    return(<>
      <h1>{this.props.location.title}</h1>
      <div className="grid">
        {
          this.props.location.sems.map((sem , i) => {
            return (<>
              <Link to={{pathname: `/courses/${this.props.location.link}/${sem.title}` ,link: `${this.props.location.link}`, sem: `${sem.title}`}}><Card data={sem.title} key={i}/></Link>
            </>)
          })
        }
      </div>
    </>)
  }
}
