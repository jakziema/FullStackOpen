import React from 'react'

const Header = ({ course }) => {
    console.log(course.name)
    return (
        
        <h1>{course.name}</h1>
    )
  }

  export default Header