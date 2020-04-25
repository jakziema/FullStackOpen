import React, { useState } from 'react'
import PersonDisplay from './Components/PersonDisplay'

const App = (props) => {
  const [ persons, setPersons ] = useState(props.phonebook) 

  const [ newName, setNewName ] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')

  const [showAlert, setShowAlert] = useState(true)

  const addPerson = (event) => {

    event.preventDefault()

    const phonebookObject = {
      id: persons.length + 1,
      name: newName,
      phoneNumber: newPhoneNumber

      
    }
     
      if (persons.some(person => person.name === newName)) {
        window.alert(`${newName} is already added to phonebook` )
        setNewName('')
        setNewPhoneNumber('')
      } else {
        setPersons(persons.concat(phonebookObject))
        setNewName('')
        setNewPhoneNumber('')
      }
        
    
  }


  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhoneNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addPerson}>
        
        <div> name: <input value = {newName} onChange = {handleNameChange}/></div>
        <div> phone number: <input value = {newPhoneNumber} onChange = {handlePhoneChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers:</h2>
      <ul>
 {persons.map (person => <PersonDisplay key = {person.id} person = {person} /> )}
      </ul>
      
    </div>
  )
}

export default App