import React from 'react'
import courses from '../Courses.js'
import {Link} from 'react-router-dom'
import Card from '../Card/Card'
function CoursesPage(){
  const onCardClick = (link) => {
    localStorage.setItem("link",link)
  }
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
