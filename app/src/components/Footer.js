import React from 'react'
import { Segment, Container } from 'semantic-ui-react'

export default function Footer() {
    return (
        <Segment inverted vertical style={{ margin: '15em 0em 0em', padding: '5em 0em' }}>
            <Container textAlign="center">
                Built with love by Kalyssa
            </Container>
        </Segment>
    )
}
