import React from 'react'
import { Header } from 'semantic-ui-react'

export default function ErrorModal({ errorMessage }) {
    return (
        <Header size="large" color="teal">
            {errorMessage}
        </Header>
    )
}
