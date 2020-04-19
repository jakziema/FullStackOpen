import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = (props) => {
  return (
  <p>{props.part} : {props.exercises}</p>
  )
}

const Content = (part) => {
  return (
    <div>
      <Part />
      <Part />
      <Part />
    </div>
    
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exerciseNumber, 0);
  console.log(total)
  return (
    
      <p>Number of exercises {total}</p>
      
      
  
  );
}

const App = () => {
  //array of objects
const course = {
  name : 'Half Stack application development',
  parts : [
  {
    partName: "Fundamentals of React",
    exerciseNumber: 10
  },
  {
    partName: "Using props to pass data",
    exerciseNumber: 7
  },
  {
    partName: "State of component",
    exerciseNumber: 14
  }]
}


  return (
    <div>
      <Header  course = {course.name}/>
      <Content parts = {course.parts}/>
      <Total parts= {course.parts} />
    </div>
     
   )
}

ReactDOM.render(<App />, document.getElementById('root'))

