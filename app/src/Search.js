import React, { useState } from 'react'
import './misc.css'

const Search = ({ searchProduct }) => {
    const [query, setQuery] = useState('')

    const handleSumbit = (e, query) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSumbit} className="form">
            <input className="input" name="url" 
            placeholder="Enter product URL here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}></input>
            <button onClick={() => searchProduct(query)} className="button" type="submit">JUDGE</button>
        </form>
    )
}

export default Search