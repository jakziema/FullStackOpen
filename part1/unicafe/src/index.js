import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => {
  return (
      <div>
      <h1>{text}</h1>
      </div>
    
  )
}

const Statistic =  ({text, value}) => {
  return (
    <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  )
  
  
}

const Statistics = ({statistics}) => {
  const hasFeedback = statistics.allVotes.value > 0
  const showFeedback = (
    <table>
      <tbody>
        {Object.values(statistics).map(stat => (
          <Statistic key={stat.text} text={stat.text} value={stat.value} />
        ))}
      </tbody>
    </table>
  )

  const showNoFeedback = <p>No feedback given</p>

        return <div>{hasFeedback ? showFeedback: showNoFeedback}</div>
   
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

  const allScore = good + neutral - bad
  const allVotes = good + neutral + bad
  const average = allScore / allVotes
  const positive = (good * 100 / allVotes).toFixed(2)

  //object key: value
  const statistics = {
    good: { text: 'Good', value: good },
    neutral: { text: 'Neutral', value: neutral },
    bad: { text: 'Bad', value: bad },
    allVotes: { text: 'All', value: allVotes },
    average: { text: 'Average', value: average },
    positive: { text: 'Positive', value: positive }
  }

  return (
    <div>
      <Header text = "Give feedback"/>
      <Button onClick = {() => setGood(good + 1) } text = 'good'/>
      <Button onClick = {() => setNeutral( neutral + 1)} text = 'neutral'/>
      <Button onClick = {() => setBad(bad + 1)} text = 'bad'/>
      {console.log(statistics.good.value)}
      <Header text = "Statistics"/>
      <Statistics statistics = {statistics}/>
       

      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)