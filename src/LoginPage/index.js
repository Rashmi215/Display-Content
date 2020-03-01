import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import './login.css';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.name = React.createRef();
        this.pass = React.createRef();
    }

    componentDidMount() {
        if(localStorage.getItem('logged_in') === 'yes') {
            console.log('bbbnbdjh');
            this.props.history.push('/home')
        }
    }

    handleSubmit = (e) => {
        
        e.preventDefault();
        let name = this.name.current.value;
        let pass = this.pass.current.value;

        if(name.length > 0 && pass.length > 0) {
            this.props.history.push('/home', {name});
            localStorage.setItem('logged_in', 'yes');
            localStorage.setItem('name', name)
        } else {
            alert('Please enter both user name and password')
        }
 
    }

    render() {
        return(
            <div className='login-page'>
               <Form className='login-form'>
                   <h2 className='text-center'>Welcome</h2> 
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" ref={this.name}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={this.pass}/>
                    </Form.Group>
                    <Button variant="outline-info" onClick={this.handleSubmit} type="submit" block>Submit</Button>
                </Form>
            </div>
        )
    }
}