import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Header} from './pages/header';
import {mylist, MyList} from './pages/mylist';


function App() {
    return (
        <Router>
            <Header/>

            <Switch>
                <Route exact path="/">
                    <mylist/>
                </Route>
            <Route path="/watchlist">
                <watchlist/>
            </Route>
            
            </Switch>
        </Router>
    )
}

export default App; 
