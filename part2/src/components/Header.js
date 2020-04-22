import React from 'react'

const Header = ({ title }) => {
    
    return (
            
        title.map((course2) => 
            <h1>{course2.name}</h1>
        )
    )
}

export default Header