import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar.js';
import Dashboard from './components/dashboard/Dashboard.js';


class App extends React.Component{
    render(){
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />

                <Switch>
                    <Route path='/' component={Dashboard}></Route>
                </Switch>
            </div>
        </BrowserRouter>
  )
 }
}

export default App;
