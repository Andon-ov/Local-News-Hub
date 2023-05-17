import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// to use context we need to import 'useContext' and 'AuthContext'
import {useContext} from 'react';
import {AuthContext} from '../../contexts/AuthContext';

// import Navigate from react-router-dom 6 to navigate wherever we want
import {useNavigate} from 'react-router-dom';

// import authService to use func from them
import * as authService from '../../services/authService';
import './Register.css';

function Register() {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let {email, password} = Object.fromEntries(new FormData(e.currentTarget));

        authService.register(email, password).then((authData) => {
            login(authData);
            navigate('/');
        })
        .catch((error) => alert(error.message));
    };


    return (
        <div className='register'>
            <Form onSubmit={registerSubmitHandler} className='register__form'>
                <h1 className='register__title' >Register</h1>
                <br/>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email'/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password'/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};
export default Register;
