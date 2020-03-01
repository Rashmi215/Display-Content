import React, {Component} from 'react';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import './home.css';

export default class Home extends Component {
    state = {
        paneOneContent: '',
        paneTwoContent: '',
        url1: '',
        url2: ''
    };

    handleChange = (e) => {
        
        this.setState({[e.target.name]: e.target.value})
    };

    handleSearchOne = (e) => {
        e.preventDefault();
        this.setState({paneOneContent: this.state.url1});
    }

    handleSearchTwo = (e) => {
        e.preventDefault();
        this.setState({paneTwoContent: this.state.url2});
    }

    logOut = () => {
        localStorage.removeItem('logged_in');
        localStorage.removeItem('name')
        this.props.history.push('/')
    }

    handleSubmit = e => e.preventDefault();

    render(){
        return(
            <>

                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/home">{localStorage.getItem('name')}</Navbar.Brand>
                    <Form inline className='form-searchbar' onSubmit={this.handleSubmit}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-3" onChange={this.handleChange} name='url1'/>
                        <Button variant="outline-info" onClick={this.handleSearchOne}>Search</Button>
                    </Form>
                    <Form inline className="form-searchbar2" onSubmit={this.handleSubmit}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleChange} name='url2'/>
                        <Button variant="outline-info" className="ml-sm-2" onClick={this.handleSearchTwo}>Search</Button>
                    </Form>
                    <Nav className="ml-auto">
                        <Nav.Link onClick={this.logOut}>Logout</Nav.Link>
                    </Nav>
                </Navbar>

                <SplitterLayout primaryIndex={0} percentage>
                    <div style={{height: '100%'}}> 
                        <iframe name="pane1" src={this.state.paneOneContent} width='100%' height='100%'></iframe>
                    </div> 
                    <div style={{height: '100%'}}>
                        <iframe name="pane2" src={this.state.paneTwoContent} width='100%' height='100%'></iframe>
                    </div>
                </SplitterLayout>
               
            </>
        );
    }
}