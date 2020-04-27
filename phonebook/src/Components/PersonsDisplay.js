import React from 'react'
import SinglePersonDisplay from './SinglePersonDisplay'
import App, {namesToShow} from '../App'


const PersonsDisplay = ({person, deletePerson}) => {
    return(
    
         <SinglePersonDisplay person = {person} deletePerson = {deletePerson}/>
    
    
    
    )
}

export default PersonsDisplay