import React from 'react'
import Content from './components/Course'
import Header from './components/Header'
import Total from './components/Total'

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