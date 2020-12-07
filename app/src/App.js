import React, { useState } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Search from './Search'
import Result from './Result'
import axios from 'axios'
import './App.css';

function App()  {
    // const [shouldBuy, setShouldBuy] = useState(false)
    // const [reviews, setReviews] = useState([])
    // const [url, setURL] = useState('')
    const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT
    const [redirect, setRedirect] = useState("")
    const [urlPrompt, setUrlPrompt] = useState(false)
    const [noReviews, setNoReviews] = useState(false)
    const [problem, setProblem] = useState(false)

    const api_call = async (query) => {
        axios.get(`${API_ENDPOINT}/should-i-buy?url=${query}`)
        .then((res) => {
            console.log(res.data)
            setRedirect(res.data.verdict)
        })
        .catch((err) => {
            const code = err.response.status
            if(code === 400){
                setUrlPrompt(true)
            } else if(code === 404){
                setNoReviews(true)
            } else {
                setProblem(true)
            }

        })
    }

    const parsePage = (query) => {
        api_call(query)
    }
  
    return (
    <BrowserRouter>
    <Route path="/results" component={Result}><Result/></Route>
      <div className="App-page">
        <h2 id="title">
          Should You Buy that?
        </h2>
        <p id="subtitle">Let us be the judge of that.</p>
        {
            urlPrompt
            ? <h4>Please enter a URL</h4>
            : <></>
        }

        {
            noReviews
            ? <h4>There are no reviews to inform our decision. Please try again! <span aria-label="sad emoji" role="img">☹️</span></h4>
            : <></>
        }

        {
            problem
            ? <h4>There was a problem. Please refresh & try again</h4>
            : <></>
        }
        
        <Search searchProduct={ query => parsePage(query)}></Search>

        {
        redirect !== ""
        ? <Redirect to={{pathname: "/results", state: { verdict: redirect }}}/>
        : <></>
            
        }

      </div>
    </BrowserRouter>
  );
}

export default App;
