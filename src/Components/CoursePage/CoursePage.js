import React from 'react'
import Card from '../Card/SubCard'
import ReactGA from 'react-ga'
export default class CoursePage extends React.Component{
  onCardClick = ( sem) => {
  }
  componentDidMount(){
    ReactGA.pageview(window.location.pathname);
  }
  render(){
    let course = this.props.history.location.state.course
    console.log(course)
    console.log('props', this.props)
    return(<>
      <h1 className="pageHeader">{course.title}</h1>
      <div className="grid">
        {
          course.semester.map((sem , i) => {
            return (
                <div onClick={() => this.props.history.push({pathname: `/courses/${course.link}/${sem.title}`, state:{ sem: sem, link : course.link }})} key={i}>
                  <Card data={sem.title}/>
                </div>)
          })
        }
      </div>
    </>)
  }
}
