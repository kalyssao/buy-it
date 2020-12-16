import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home'
import Search from './components/Search'
import Result from './components/Result'
import './App.css';

function App()  {
    // const [shouldBuy, setShouldBuy] = useState(false)
    // const [reviews, setReviews] = useState([])
    // // const [url, setURL] = useState('')
    // const [redirect, setRedirect] = useState("")
    // const [urlPrompt, setUrlPrompt] = useState(false)
    // const [noReviews, setNoReviews] = useState(false)
    // const [problem, setProblem] = useState(false)
  
    return (
        <Switch>
            <Route path="/">
                <Home/>
            </Route>
            <Route path="/results">
                <Result/>
            </Route>
        </Switch>
            
    // <BrowserRouter>
    // <Route path="/results" component={Result}><Result/></Route>
    //   <div className="ui centered grid">
    //     <Banner/>
    //     {
    //         urlPrompt
    //         ? <h4>Please enter a URL</h4>
    //         : <></>
    //     }

    //     {
    //         noReviews
    //         ? <h4>There are no reviews to inform our decision. Please try again! <span aria-label="sad emoji" role="img">☹️</span></h4>
    //         : <></>
    //     }

    //     {
    //         problem
    //         ? <h4>There was a problem. Please refresh & try again</h4>
    //         : <></>
    //     }
        
    //     
    //     {
    //     redirect !== ""
    //     ? <Redirect to={{pathname: "/results", state: { verdict: redirect }}}/>
    //     : <></>
            
    //     }

    //   </div>
    // </BrowserRouter>
  );
}

export default App;
