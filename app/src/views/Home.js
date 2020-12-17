import React from 'react'
import { useHistory } from 'react-router-dom'
import Search from '../components/Search'
import Footer from '../components/Footer'
import { Grid, Container } from 'semantic-ui-react'

import { api_service } from '../services/api'

export default function Home() {
    let history = useHistory()

    const parsePage = (query) => {
        api_service.get(`/should-i-buy?url=${query}`)
        .then((res) => {
            console.log(res.data.decision)
            history.push({
                pathname: '/result',
                decision: res.data.decision,
                message: 'Success!'
            })
        })
        .catch((err) => {
            var verdict;
            var message;
            const code = err.response.status
            switch(code){
                case 400:
                    verdict = null
                    message = "No url provided"
                    break;
                case 404:
                    verdict = null
                    message = "No reviews found"
                    break;
                default:
                    verdict = null
                    message = "There was a problem"
            }
            history.push({
                    pathname: '/results',
                    verdict: verdict,
                    message: message
            })

        })
    }

    return (
        <Grid textAlign="center" style={{ height: '100vh' }} >
            <Grid.Column>
                <Search searchProduct={ query => parsePage(query)}/>
            </Grid.Column>
            
            
        </Grid>
    )
}
