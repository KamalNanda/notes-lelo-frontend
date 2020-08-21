import React, {Component} from 'react'
import courses from '../Courses.js'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import Card from '../Card/Card'
function CoursesPage(){
  return(
    <div>
      <h1>Courses</h1>
      <div className="grid">
        {
          courses.map((course , index) =>{
            return(
              <Link to={{pathname : `/courses/${course.link}` ,link:course.link, title:course.title, sems: course.semester}}><Card data={course} key={index} /></Link>
            )
          })
        }
      </div>
    </div>
  )
}
export default CoursesPage
