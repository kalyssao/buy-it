import React from 'react'
import { useHistory } from 'react-router-dom'
import Banner from '../components/Banner'
import Search from '../components/Search'

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
        <div className="ui grid container">
            <Banner/>
            <Search searchProduct={ query => parsePage(query)}></Search>
        </div>
    )
}
