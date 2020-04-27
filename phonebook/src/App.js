import React, { useState,useEffect} from 'react'
import PersonsDisplay from './Components/PersonsDisplay'

import axios from 'axios'


const App = (props) => {

  const [ persons, setPersons ] = useState([]) 

  const [ newName, setNewName ] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')

  const [searchName, setNewSearchName] = useState('')
  const [showAll, setShowAll] = useState(true)
  
  const phonebookAddress = 'http://localhost:3001/phonebook'


  useEffect( () => {
    console.log('effect')
    axios
      .get(phonebookAddress)
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])


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
        
        axios
          .post(phonebookAddress, phonebookObject)
          .then(response => {
            setPersons(persons.concat(response.data))
            setNewName('')
            setNewPhoneNumber('')
          })

        

      }
        
    
  }


  const handleFilterChange = (event) => {
    setNewSearchName(event.target.value)
    setShowAll(false)
    console.log('searching for:', searchName)
  }


  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewPhoneNumber(event.target.value)

  }

  const namesToShow = showAll 
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(searchName.toLocaleLowerCase()))

  
  

  return (
    
    <div>
      <h1>Phonebook</h1>  
      <div>filter shown with a: <input value = {searchName} onChange = {handleFilterChange} />
      </div>


      <form onSubmit = {addPerson}>
        <h2>add a new</h2>
        <div> name: <input value = {newName} onChange = {handleNameChange}/></div>
        <div> phone number: <input value = {newPhoneNumber} onChange = {handlePhoneChange}/></div>
        <div><button type="submit">add</button></div>
      </form>


      <h3>Numbers:</h3>
      
     {namesToShow.map (person => <PersonsDisplay key = {person.id} person = {person} /> )}
    
      
    </div>
  )
}

export default App