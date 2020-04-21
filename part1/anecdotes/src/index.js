import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => {
  return (
    <p>
      <button onClick={onClick}>
        {text}
      </button>
    </p>
  )
}

const App = (props) => {
  //make empty array with a size of anecdotes array
  const voteList = Array(props.anecdotes.length).fill(0)
  const [selected, setSelected] = useState(0)
  //
  const [vote, setVote] = useState([...voteList])
  
  console.log(vote)

  

  const randomClick = () => {
    const randomNumber = Math.floor(Math.random() * (anecdotes.length - 1))
    setSelected(randomNumber)
  }

  const voteClick = () => {
    //copy of vote array
    const copy = [...vote]
    //selected vote in copy array add vote
    copy[selected] += 1
    //update vote array
    setVote(copy)
    
    
  }


  return (
    <div>
      <h1>{props.anecdotes[selected]}</h1>
      <p>has {vote[selected]}</p>
      <Button onClick = {voteClick} text = "vote" />
      <Button onClick={randomClick} text='next anecdote' />
      
    </div>

  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]




ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)