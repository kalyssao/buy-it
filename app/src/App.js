import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home'
import Result from './components/Result'
import './App.css';

function App()  {
  
    return (
        <Switch>
            <Route path="/result" component={Result}/>
            <Route path="/" component={Home}/>
        </Switch>
  );
}

export default App;
