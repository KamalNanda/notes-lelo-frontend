import React from 'react'
import courses from '../Analysis'
export default class AnalysisPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            syl: {},
        }
    }
    componentDidMount(){
        let filteredCourse = courses.filter(course => course.link === this.props.history.location.state.link)
        let filteredSemester = filteredCourse[0].semester.filter(semester => semester.title === this.props.history.location.state.sem)
        let filteredSubject = filteredSemester[0].subjects.filter(subject => subject.title === this.props.location.state.sub)
        this.setState({
            syl : filteredSubject[0],
            
        })
    }
    render(){
        return(
            <div style={{color:"var(--nav-font)"}}>
                <h1 className="pageHeader">{this.props.history.location.state.sub} Analysis</h1>
                {
          this.state.syl ? (<>
            <div className="container">
              <h2> Paper Id - {this.state.syl.paper_id}</h2>
              {
                this.state.syl.syllabus ? (<> 
                    <h3>UNIT 1 </h3>
                    <h4>{this.state.syl.syllabus.unit_1.title}</h4>
                    <ol>
                        {
                            this.state.syl.syllabus.unit_1.chapters.map((topic, i)=>{
                                return(
                                    <li key={i}>{topic}</li>
                                )
                            })
                        }
                    </ol>
                  </>): <></>
              }
              {
                this.state.syl.syllabus ? (<> 
                    <h3>UNIT 2 </h3>
                    <h4>{this.state.syl.syllabus.unit_2.title}</h4>
                    <ol>
                        {
                            this.state.syl.syllabus.unit_2.chapters.map((topic, i)=>{
                                return(
                                    <li key={i}>{topic}</li>
                                )
                            })
                        }
                    </ol>
                  </>): <></>
              }
              {
                this.state.syl.syllabus ? (<> 
                    <h3>UNIT 3 </h3>
                    <h4>{this.state.syl.syllabus.unit_3.title}</h4>
                    <ol>
                        {
                            this.state.syl.syllabus.unit_3.chapters.map((topic, i)=>{
                                return(
                                    <li key={i}>{topic}</li>
                                )
                            })
                        }
                    </ol>
                  </>): <></>
              }
              {
                this.state.syl.syllabus ? (<> 
                    <h3>UNIT 4 </h3>
                    <h4>{this.state.syl.syllabus.unit_4.title}</h4>
                    <ol>
                        {
                            this.state.syl.syllabus.unit_4.chapters.map((topic, i)=>{
                                return(
                                    <li key={i}>{topic}</li>
                                )
                            })
                        }
                    </ol>
                  </>): <></>
              }
            </div>
          </>) : <></>
        }
            </div>
        )
    }
}