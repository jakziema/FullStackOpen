import React from 'react'
import Course from './components/Course'
import Header from './components/Header'
import Total from './components/Total'



const App = ({course}) => {
    const calls = course.map((i) => <Course key={i.id} course={i} />)

    return (
        <div>
            <Header title = {course} />
            {/* <Total course = {course} /> */}
           {calls}
           {/* <Course course = {course} /> */}
        </div>
      )

}

export default App