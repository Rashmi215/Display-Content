import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './HomePage/Home';
import LoginPage from './LoginPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={LoginPage}/>
                    <Route path='/home' component={Home}/>
                </Switch>
            </BrowserRouter>
      );
    }
}

export default App;
