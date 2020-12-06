import React from 'react'
import axios from 'axios'
import Card from '../Card/SubCard'
import courses from '../Courses'
import ReactGA from 'react-ga'
export default class SubPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data: [],
      contents: [],
      syl: {}
    }
  }
  
  onCardClick = (type) => {
    sessionStorage.setItem("type",type)
  }
  async componentDidMount(){
    let filteredCourse = courses ? courses.filter(course => course.link === this.props.history.location.state.link) : []
        let filteredSemester = filteredCourse[0]? filteredCourse[0].semester.filter(semester => semester.title === this.props.location.state.sem.title) : []
        let filteredSubject = filteredSemester[0].subjects.filter(subject => subject.title === this.props.location.state.sub)
        this.setState({
            syl : filteredSubject[0],
            
        })
    ReactGA.pageview(window.location.pathname);
         
    await axios.get(`https://notes-lelo.herokuapp.com/api/notes/${this.props.history.location.state.link}/${this.props.history.location.state.sem.title}/${this.props.history.location.state.sub}`).then(response=> this.setState({data: response.data.note}))
    this.setState({contents : [...new Set(this.state.data.map(x => x.ctype))]})
    console.log(this.state)
  }
  render(){
    return(
      <div className="type-page">
        <h1 className="pageHeader">{this.props.history.location.state.sub}</h1>
        <div className="grid">
          {
            this.state.contents.map((note, i)=>{
              return(<div onClick={() => this.props.history.push({
                pathname: `/courses/${this.props.history.location.state.link}/${this.props.history.location.state.sem.title}/${this.props.history.location.state.sub}/${note}`,
                state: {
                  link : this.props.history.location.state.link,
                  sub : this.props.history.location.state.sub,
                  sem: this.props.history.location.state.sem.title,
                  type: note

                }
              })}>
                <Card data={note} key={i} />
              </div>)
            })
          }
          
          {
            this.state.syl.link ? <a href={this.state.syl.link} rel="noopener noreferrer" target="_blank"><Card data="Analysis" /></a> : (<></>) }
          }
          {/* <div onClick={() => this.props.history.push({
                pathname: `/courses/${this.props.history.location.state.link}/${this.props.history.location.state.sem.title}/${this.props.history.location.state.sub}/analysis`,
                state: {
                  link : this.props.history.location.state.link,
                  sub : this.props.history.location.state.sub,
                  sem: this.props.history.location.state.sem.title,

                }
              })}>
                <Card data={"Analysis"} />
              </div>*/}
          {/*<Link to={{, sem: `${this.props.location.sem}`, sub: `${this.props.location.sub}`, type: note}}>*/}
        </div>
        {
          this.state.syl ? (<>
            <h1 className="pageHeader">Syllabus</h1>
            <div className="container">
              <h2> Paper Id - {this.state.syl.paper_id}</h2>
              {
                this.state.syl.syllabus ? (<> 
                    <h3>UNIT 1 </h3>
                    <h4>{this.state.syl.syllabus.unit_1.title}</h4>
                    <p>{this.state.syl.syllabus.unit_1.chapters}</p>
                  </>): <></>
              }
              {
                this.state.syl.syllabus ? (<> 
                    <h3>UNIT 2 </h3>
                    <h4>{this.state.syl.syllabus.unit_2.title}</h4>
                    <p>{this.state.syl.syllabus.unit_2.chapters}</p>
                  </>): <></>
              }
              {
                this.state.syl.syllabus ? (<> 
                    <h3>UNIT 3 </h3>
                    <h4>{this.state.syl.syllabus.unit_3.title}</h4>
                    <p>{this.state.syl.syllabus.unit_3.chapters}</p>
                  </>): <></>
              }
              {
                this.state.syl.syllabus ? (<> 
                    <h3>UNIT 4 </h3>
                    <h4>{this.state.syl.syllabus.unit_4.title}</h4>
                    <p>{this.state.syl.syllabus.unit_4.chapters}</p>
                  </>): <></>
              }
            </div>
          </>) : <></>
        }
      </div>
    )
  }
}
