import React, { useState } from 'react'
import { Form, Header, Container, Button } from 'semantic-ui-react'

const Search = ({ searchProduct }) => {
    const [query, setQuery] = useState('')

    const handleSumbit = (e, query) => {
        e.preventDefault()
    }

    return (
        <Container text style={{ margin: '15em 0em 0em', padding: '5em 0em' }}>
            <Header size="huge">Should You Buy That?</Header>
            <Header style={{ marginBottom: '2em' }} size="small">Let me be the judge of that.</Header>   
            
            <Container>
                <Form onSubmit={handleSumbit}>
                        <Form.Input 
                        fluid
                        name="url" 
                        placeholder="Enter product URL here"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}/>
                        <Button color="teal" fluid onClick={() => searchProduct(query)} style={{ marginTop: '1.5em' }} type="submit">JUDGE</Button>
                </Form>
            </Container>
        </Container>
    )
}

export default Search