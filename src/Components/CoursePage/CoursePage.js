import React from 'react'
import Card from '../Card/SubCard'
import data from '../Courses.js'
import {Link} from 'react-router-dom'
export default class CoursePage extends React.Component{
  onCardClick = ( sem) => {
    localStorage.setItem("sem",sem)
  }
  render(){
    const link = localStorage.getItem("link")
    let courses = data.filter(function (e) {
      return e.link === link;
    })
    let course = courses[0]
    console.log(course)
    return(<>
      <h1 className="pageHeader">{this.props.location.title}</h1>
      <div className="grid">
        {
          course.semester.map((sem , i) => {
            return (
              <Link to={{pathname: `/courses/${link}/${sem.title}` ,link: `${link}`, sem: `${sem.title}`}}>
                <div onClick={() => this.onCardClick(sem.title)}>
                  <Card data={sem.title} key={i}/>
                </div>
              </Link>)
          })
        }
      </div>
    </>)
  }
}
