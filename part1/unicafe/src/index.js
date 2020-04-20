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
  
    if (title === 'positive') {
      return (
        <p>
      {title} : {stat} %
    </p>
      )
    } return (
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
  const [allVotes, setAll] = useState(0)
  const [allScore,setAllScore] = useState(0)

  const setGoodClick = () => {
    setGood(good + 1)
    setAll(allVotes +1)
    setAllScore(allScore + 1)
  }

  const setNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(allVotes +1)
  }

  const setBadClick = () => {
    console.log(bad)
    setBad(bad + 1)
    setAll(allVotes +1)
    setAllScore(allScore - 1)
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
      <StatisticsHeader title = 'all' stat = {allVotes} />
      <StatisticsHeader title = 'average' stat = {allScore / allVotes} />
      <StatisticsHeader title = 'positive' stat = {good * 100 / allVotes } />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)