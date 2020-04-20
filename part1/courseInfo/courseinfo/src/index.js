import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({counter}) => {
  return (
  <div>{counter}</div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = (props) => {
  
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])




  const handleLeftClick = () => {
    // const newClicks = {
    //   ...clicks,
    //   left: clicks.left + 1
    //   //right: clicks.right
    //   //spread syntax
      
    // }
    // setClicks(newClicks)

    //setClicks({...clicks, left:clicks.left + 1})
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    // const newClicks = {
    //   ...clicks,
    //   //left: clicks.left,
    //   right: clicks.right + 1
    // }
    // setClicks(newClicks)
    //setClicks({...clicks, left:clicks.right + 1})
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }


  return (
    <div>
      <div>
        {left}
        <button onClick = {handleLeftClick}>left</button>
        <button onClick = {handleRightClick}>right</button>
        {right}
        <p>{allClicks.join('  ')}</p>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)