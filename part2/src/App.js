import React from 'react'
import Content from './components/Course'
import Header from './components/Header'


  
  const Total = ({ course }) => {
    
    const arrayOfExercises = course.parts.map((part) => part.exercises)
    const sumOfExercises = arrayOfExercises.reduce ((x,y) => x + y)

    console.log(sumOfExercises)
     
    return(
      <p>Number of exercises {sumOfExercises}</p>
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