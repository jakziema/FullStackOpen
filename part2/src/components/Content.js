import React from 'react'
import App from '../App'

const Part = ({part}) => {
  return (
    <p>
      {part.name} : {part.exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => {
        return (
          <Part key = {part.id} part = {part} /> 
        )
      })}
      
      
    </div>
  )
}

export default Content