import React from 'react'
import Card from '../Card/SubCard'
import data from '../Courses.js'
import {Link} from 'react-router-dom'
import ReactGA from 'react-ga'
export default class CoursePage extends React.Component{
  onCardClick = ( sem) => {
    localStorage.setItem("sem",sem)
  }
  componentDidMount(){
    ReactGA.pageview(window.location.pathname);    
  }
  render(){
    const link = localStorage.getItem("link")
    let courses = data.filter(function (e) {
      return e.link === link;
    })
    let course = courses[0]
    console.log(course)
    return(<>
      <h1 className="pageHeader">{course.title}</h1>
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
