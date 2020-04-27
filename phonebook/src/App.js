import React, { useState,useEffect} from 'react'
import PersonsDisplay from './Components/PersonsDisplay'
import phonebookService from './services/phonebook'

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
    phonebookService
      .getAll()
      .then(initialData => {
        setPersons(initialData)
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
        
      
        phonebookService
          .create(phonebookObject)
          .then (returnedData => {
            setPersons(persons.concat(returnedData))
            setNewName('')
            setNewPhoneNumber('')
          })

        

      }
        
    
  }

  const deletePersonWith = (id) => {
      console.log("deleting with id: ", id)
      const url = `http://localhost:3001/phonebook/${id}`
      const person = persons.find(n => n.id)
      
      if(window.confirm(`Do you really want to delete ${person.name}?`)) {
        axios
        .delete(url)
        .then (response => {
          console.log('successfully deleted, ', id)


          setPersons(persons.filter(person => person.id !== id) )
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
      
     {namesToShow.map (person => <PersonsDisplay key = {person.id} person = {person} deletePerson = {() => deletePersonWith(person.id) } /> )}
    
      
    </div>
  )
}

export default App