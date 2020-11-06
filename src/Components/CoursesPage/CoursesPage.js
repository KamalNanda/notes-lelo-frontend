import React from 'react'
import courses from '../Courses.js'
import Card from '../Card/CourseCard'
import ReactGA from 'react-ga'
function CoursesPage(props){

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  })
  console.log(props)
  return(
    <div>
      <h1 className="pageHeader">Courses</h1>
      <div className="grid">
        {
          courses.map((course , index) =>{
            return(<div onClick={() => props.history.history.push({ pathname:`/courses/${course.link}`, state:{course: course}})}>
              <Card data={course.title} key={index} />
            </div>)
          })
        }
      </div>
    </div>
  )
}
export default CoursesPage
