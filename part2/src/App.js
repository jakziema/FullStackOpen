import React from 'react'
import Course from './components/Course'
import Header from './components/Header'
import Total from './components/Total'



const App = ({courses}) => {
    //we need to use an array not an object
    const courseArray = courses.map((i) => <Course key={i.id} course={i} />)
    console.log("Courses object",courses)
    console.log("Courses map",course1)

    return (
        <div>
            
            {/* <Total course = {course} /> */}
            {courseArray}
           {/* <Course course = {course} /> */}
        </div>
      )

}

export default App