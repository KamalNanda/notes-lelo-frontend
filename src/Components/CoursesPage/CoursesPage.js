import React from 'react'
import courses from '../Courses.js'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import Card from '../Card/Card'
import ReactGA from 'react-ga'
function CoursesPage(props){

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  })
  const history = useHistory()
  console.log(props)
  return(
    <div>
      <h1 className="pageHeader">Courses</h1>
      <div className="grid">
        {
          courses.map((course , index) =>{
            return(<div onClick={() => props.history.history.push({ pathname:`/courses/${course.link}`, state:{course: course}})}>
              <Card data={course} key={index} />
            </div>)
          })
        }
      </div>
    </div>
  )
}
export default CoursesPage
