import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({titleString}) => {
  return (
      <h1>
      {titleString}
      </h1>
    
  )
}

const StatisticsHeader = ({title, stat}) => {
  return (
    <p>
      {title} : {stat}
    </p>
  )
}
const Button = ({onClick, text}) => {
  return (
    <button onClick = {onClick}>
      {text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodClick = () => {
    setGood(good + 1)
  }

  const setNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const setBadClick = () => {
    console.log(bad)
    setBad(bad + 1)
  }


  return (
    <div>
      <Header titleString = "give feedback"/>
      <Button onClick = {setGoodClick} text = 'good'/>
      <Button onClick = {setNeutralClick} text = 'neutral'/>
      <Button onClick = {setBadClick} text = 'bad'/>
      <Header titleString = "statistics"/>
      <StatisticsHeader title = 'good'  stat = {good}/>
      <StatisticsHeader title = 'neutral'  stat = {neutral}/>
      <StatisticsHeader title = 'bad'  stat = {bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)