import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const phonebook = [
  {
    id: 1,
    name: 'Jakub',
    // surname: 'Ziemann',
    // phoneNumber: 7790955,
    // date: '2019-05-30T18:39:34.091Z'

  },
  {
    id: 2,
    name: 'Yelena',
    // surname: 'Arakelow',
    // phoneNumber: 7852798,
    // date: '2019-05-30T18:39:34.091Z'
  }
]



ReactDOM.render(
  <App  phonebook = {phonebook}/>,
  document.getElementById('root')
)