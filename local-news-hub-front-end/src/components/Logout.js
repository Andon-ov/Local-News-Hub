import * as authService from '../services/authService';

import {useNavigate} from 'react-router-dom';

// to use context we need to import 'useContext' and 'AuthContext'
import {useContext, useEffect} from 'react';
import {AuthContext} from '../contexts/AuthContext';

function Logout() {
    const navigate = useNavigate();
    const {user, logout} = useContext(AuthContext);
    // call func logout

    useEffect(() => {
        authService

            .logout(user.accessToken)
            .then(() => {
                console.log(user.accessToken);
                logout();
                navigate('/');
            })
            .catch((error) => console.log(error));
    }, []);

    return null;
}

export default Logout;