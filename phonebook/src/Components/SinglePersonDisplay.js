import React from 'react'

const SinglePersonDisplay = ({person}) => {
    return (
        <li> {person.name} : {person.phoneNumber} </li>
    )
}

export default SinglePersonDisplay