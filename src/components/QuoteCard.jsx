import React from 'react'

const QuoteCard = ({name, picture, quote}) => {
    
    return(
        <div>
            <img src={picture} alt=''></img>
            <h1>{name}</h1>
            <p>{quote}</p> 
        </div>
    )
}

export default QuoteCard