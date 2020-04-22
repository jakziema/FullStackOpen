import React from 'react'
import App from '../App'
import Part from './Part'


const Course = ({ course }) => {

  return (
    <div>
      
      {course.parts.map((part) => {
        return (
          <Part key = {part.id}part = {part} /> 
        )
      })}
      
      
    </div>
  )
}

export default Course