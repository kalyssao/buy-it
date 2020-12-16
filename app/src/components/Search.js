import React, { useState } from 'react'
import { Input, Button } from 'semantic-ui-react'

const Search = ({ searchProduct }) => {
    const [query, setQuery] = useState('')

    const handleSumbit = (e, query) => {
        e.preventDefault()
    }

    return (
        <div className="ui centered grid">
            <form onSubmit={handleSumbit}>
                <Input className="input" name="url" 
                placeholder="Enter product URL here"
                value={query}
                onChange={(e) => setQuery(e.target.value)}></Input>
                <Button onClick={() => searchProduct(query)} className="button" type="submit">JUDGE</Button>
            </form>
        </div>
    )
}

export default Search