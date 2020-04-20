import React from 'react';
import ReactDOM from 'react-dom';

//defining functions
const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)

return <p>Sum: {p1 + p2}</p>
}

//without parentheses single parameter
const square = p => {
return <p>Square: {p * p}</p>
}

//defined by function
function product(a,b) {
return <p>Multiply: {a * b}</p>
}

//single expression function

const square2 = p => <p>Square 2: {p * p}</p>

//function expression
const average = function(a,b) {
return <p>Average: {(a+b) / 2}</p>
}


class Person {
  constructor(name,age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log('hello my name is', this.name)
  return <p>Hello my name is: {this.name}. I'm {this.age} years old.</p>
  }
}

const jakub = new Person('Jakub Ziemann', 25)
jakub.greet()
const yelena = new Person('Yelena', 25)


const jakub1 = {
  name: "Jakub Ziemann",
  age: 25,
  education: "Bachelor",
  greet: function() {
    return <p>Hello my name is: {this.name}</p>
  },
  doAddition: function(a,b) {
    console.log('Addition: ',(a+b))
  },
}

const Hello = ({name, age}) => {
  
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old.
      </p>
      <p>You were probably born in {bornYear()}</p>
    </div>
  )
}

const App = (props) => {
  const {counter} = props
  return (
  <div>{counter}</div>
  )
}

let counter = 1

const refresh = () => {
  ReactDOM.render(<App counter={counter} />, 
  document.getElementById('root'))
}

refresh()
counter += 1
refresh()
counter += 1
refresh()




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

