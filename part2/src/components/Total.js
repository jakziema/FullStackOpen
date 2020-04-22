import React from 'react' 

const Total = ({ course }) => {
    
    const arrayOfExercises = course.parts.map((part) => part.exercises)
    const sumOfExercises = arrayOfExercises.reduce ((x,y) => x + y)

    console.log(sumOfExercises)
     
    return(
      <p>Number of exercises {sumOfExercises}</p>
    ) 
  }

  export default Total