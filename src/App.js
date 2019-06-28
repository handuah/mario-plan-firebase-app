import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar.js';
import Dashboard from './components/dashboard/Dashboard.js';
import ProjectDetails from './components/projects/ProjectDetails.js';


class App extends React.Component{
    render(){
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />

                <Switch>
                    <Route exact path='/' component={Dashboard}></Route>
                    <Route path='/project/:id' component={ProjectDetails}></Route>
                </Switch>
            </div>
        </BrowserRouter>
  )
 }
}

export default App;
