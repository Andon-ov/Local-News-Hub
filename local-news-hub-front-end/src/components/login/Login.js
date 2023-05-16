import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom';
import * as authService from '../../services/authService';
import {useContext} from 'react';
import {AuthContext} from '../../contexts/AuthContext';
import './Login.css';

const Login = () => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const email = formData.get('email');
        const password = formData.get('password');

        authService
            .login({
                email, password,
            })
            .then((user) => {


                // give user data to func from context 'login'
                login(user);

                // navigate to dashboard after login
                navigate('/');
            })
            .catch((error) => alert(error.message));


    }

    return (<div  className='login' >
            <Form  className='login__form' onSubmit={onSubmit}>
                <h1 className='login__title'>Login</h1>
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
        </div>);
};
export default Login;
