import React, {useState, useEffect} from 'react'
import axios from 'axios'
import QuoteCard from './QuoteCard'

const QuoteList = () => {

    const [quotes, setQuotes] = useState([])
    const [change, setChange] = useState(0)

    useEffect( () => {
        const getQuotes = async () => {
        const result =  await axios.get(`https://quests.wilders.dev/simpsons-quotes/quotes?count=15`);
        setQuotes(result.data)
        }
        getQuotes()
    },[change]
    )


    return(

        <div>
            <button onClick={() => setChange(change + 1)}>Change</button>
            {quotes.map( x =>(
                <QuoteCard name={x.character} picture={x.image} quote={x.quote}/>
            )
            )}
        </div>
    )
}

export default QuoteList