import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = "Fundamentals of React"
  const exercise1 = 10
  const part2 = "Using props to pass data"
  const exercise2 = 7
  const part3 = "State of component"
  const exercise3 = 14

  return (
    <div>
      <p>
        {part1} {exercise1}
      </p>
      <p>
        {part2} {exercise2}
      </p>
      <p>
        {part3} {exercise3}
      </p>
  <p>Number of exercises {exercise1 + exercise2 + exercise3}</p>
    </div>
   )
}

ReactDOM.render(<App />, document.getElementById('root'))

