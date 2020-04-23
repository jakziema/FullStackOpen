import React from 'react'
import Part from './Part'
import Header from './Header'
import Total from './Total'


const Course = ({ course }) => {
  
  

  return (
    <div>
     
      <Header key = {course.id} course = {course} />


      {course.parts.map((part) => {
        return (
          
          <Part key = {part.id} part = {part} /> 
        )
      })}

      <Total course = {course} />
      
      
    </div>
  )
}

export default Course