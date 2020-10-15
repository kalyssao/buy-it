import React, { useState } from 'react'
import './misc.css'

function Search() {
    const [query, setQuery] = useState('')
    const [verdict, setVerdict] = useState('')

    const searchProduct = async (e) => {
        e.preventDefault()
        // some kind of loading indicator

        const url = `http://127.0.0.1:5000/should-i-buy?url=${query}`

        try {
            const res = await fetch(url)
            //setVerdict(res.)
            console.log(res)
        } catch (err) {
            console.log(err)
        }
        
        
    }

    return (
        <div className="form">
            <input className="input" name="url" 
            placeholder="Enter product URL here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}></input>
            <button onClick={searchProduct} className="button" type="submit">JUDGE</button>
        </div>
    )
}

export default Search