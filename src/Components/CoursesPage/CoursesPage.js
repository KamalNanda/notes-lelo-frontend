import React from 'react'
import courses from '../Courses.js'
import {Link} from 'react-router-dom'
import Card from '../Card/Card'
import ReactGA from 'react-ga'
function CoursesPage(){
  const onCardClick = (link) => {
    sessionStorage.setItem("link",link)
  }
  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname);   
  })
  return(
    <div>
      <h1 className="pageHeader">Courses</h1>
      <div className="grid">
        {
          courses.map((course , index) =>{
            return(<div onClick={() => onCardClick(course.link)}>
              <Link to={{pathname : `/courses/${course.link}` ,link:course.link, title:course.title, sems: course.semester}}><Card data={course} key={index} /></Link>
            </div>)
          })
        }
      </div>
    </div>
  )
}
export default CoursesPage
