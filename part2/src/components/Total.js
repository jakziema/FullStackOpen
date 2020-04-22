import React from 'react' 

const Total = ({ course }) => {
    console.log(course)
    
    const arrayOfExercises = course.parts.map((part) => part.exercises)
    const sumOfExercises = arrayOfExercises.reduce ((x,y) => x + y)

    console.log(sumOfExercises)
     
    return(
      <p><b>Total of {sumOfExercises} exercises</b></p>
    ) 
  }

  export default Total