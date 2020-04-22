import React from 'react'
import Content from './components/Content'

const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Total = ({ course }) => {
    const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
    return(
      <p>Number of exercises {sum}</p>
    ) 
  }
  
  

const App = ({course}) => {
    return (
        <div>
          <Header course={course} />
          <Content course={course} />
          <Total course={course} />
          {/* <Course course = {course} /> */}
        </div>
      )

}

export default App