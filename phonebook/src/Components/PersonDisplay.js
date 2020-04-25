import React from 'react'

const PersonDisplay = ({person}) => {
    return(
    
    <li> {person.name} : {person.phoneNumber} </li>
    
    )
}

export default PersonDisplay