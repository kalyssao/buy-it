import React, { useState, useEffect } from 'react'
import Search from './Search'
import Result from './Result'
import './App.css';

function App()  {
    let resultsDiv
    const [reviews, setReviews] = useState({})
    const [url, setURL] = useState('')
    const api_call = async (query) => {
        const url = `http://127.0.0.1:5000/should-i-buy?url=${query}`
        try {
            const res = await fetch(url)
            const body = await res.json()
            console.log(body)
            setReviews({...reviews, ...body})
        } catch (err) {
            console.log(err)
        }
    }

    const parsePage = (query) => {
        api_call(query)
    }

    // the probem is that the resultdiv doesnt update after state change
    // so i was thinking about using useEffect but updating reviews does nothing

    useEffect(() => {
        if (reviews) {
          resultsDiv = <Result 
          product_title={reviews.product_title}
          next_page={reviews.next_page}
          reviews={reviews.reviews} />
        } else {
            resultsDiv = <div></div>
        }
      }, []);

    /*if (reviews === null) {
        ResultDiv = <Result 
                        product_title={reviews.product_title}
                        next_page={reviews.next_page}
                        reviews={reviews.reviews} />
    } else {
        ResultDiv = <h3>Nothing for now..</h3>
    }*/

    
  
    return (
      <div className="App-page">
        <h2 id="title">
          Should You Buy that?
        </h2>
        <p id="subtitle">Let us be the judge of that.</p>
        <Search searchProduct={ query => parsePage(query)}></Search>
        {resultsDiv}
      </div>
  );
}

export default App;
