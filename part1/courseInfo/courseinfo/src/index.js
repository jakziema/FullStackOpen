import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  return (
      <p>{props.name} {props.number}</p> 
  )
}

const Total = (props) => {
  return(

      <p>Number of exercises = {props.totalNumber}</p>
  )
}

const App = () => {
  // const definitions
  const course = 'Half Stack application development'
  const part1 = "Fundamentals of React"
  const exercise1 = 10
  const part2 = "Using props to pass data"
  const exercise2 = 7
  const part3 = "State of component"
  const exercise3 = 14

  return (
    <div>
      <Header name={course} />
      <Content name = {part1} number={exercise1}/>
      <Content name = {part2} number={exercise2}/>
      <Content name = {part3} number={exercise3}/>
      <Total totalNumber = {exercise1 + exercise2 + exercise3}/>
    </div>
   )
}

ReactDOM.render(<App />, document.getElementById('root'))

