import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Search from '../components/Search'
// import Footer from '../components/Footer'
import { Grid, Dimmer, Loader } from 'semantic-ui-react'

import { api_service } from '../services/api'

export default function Home() {
    let history = useHistory()
    const [loading, setLoading] = useState()

    const parsePage = (query) => {
        setLoading(true)
        api_service.get(`/should-i-buy?url=${query}`)
        .then((res) => {
            console.log(res.data)
            setLoading(false)
            history.push({
                pathname: '/result',
                the_decision: res.data.decision,
                prod_title: res.data.title,
                prod_img: res.data.img,
                prod_rating: res.data.rating,
                status: 200
            })
        })
        .catch((err) => {
            console.log(err.response)
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
                pathname: '/result',
                the_decision: verdict,
                message: message,
                status: code
            })
        })
    }

    return (
        <Grid textAlign="center" style={{ height: '100vh' }} >
            <Grid.Column>
                <Dimmer active={loading} inverted>
                    <Loader size="medium" content="Judging"/>
                </Dimmer>
                <Search searchProduct={ query => parsePage(query)}/>
            </Grid.Column>
        </Grid>
    )
}
