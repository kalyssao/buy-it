import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Banner from '../components/Banner'
import Search from '../components/Search'

import { api_service } from '../services/api'

export default function Home() {
    const [ decision, setDecision ] = useState()
    let history = useHistory()

    const parsePage = (query) => {
        api_service.get(`/should-i-buy?url=${query}`)
        .then((res) => {
            console.log(res.data.decision)
            setDecision(true)
        })
        .catch((err) => {
            const code = err.response.status
            if(code === 400){
                history.push('/')
            } else if(code === 404){
                // setNoReviews(true)
            } else {
                // setProblem(true)
            }

        })
    }

    return (
        <div className="ui grid container">
            <Banner/>
            <Search searchProduct={ query => parsePage(query)}></Search>
        </div>
    )
}
