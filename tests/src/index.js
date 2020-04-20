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

const App = () => {
  
  return (
    <div>
      <h1>Siema Siema</h1>
      {sum(1,5)}
      {square(5)}
      {square2(7)}
      {product(5,2)}
      {average(10,20)}
      {jakub1.greet()}
      {yelena.greet()}
      {jakub1.doAddition(5,2)}
    </div>
) 
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

