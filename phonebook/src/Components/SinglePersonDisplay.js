import React from 'react'

const SinglePersonDisplay = ({person,deletePerson}) => {
    return (
        <li> {person.name} : {person.phoneNumber} 
        <button onClick = {deletePerson}>Delete</button>
        </li>

    )
}

export default SinglePersonDisplay