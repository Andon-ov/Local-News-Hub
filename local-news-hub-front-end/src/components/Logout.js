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
            .logout(user.token)
            .then((res) => {
                if (res.ok){
                    logout();
                    navigate('/');
                }else{
                    navigate(-1);
                }
            })
            .catch((error) => console.log(error));
    }, [logout, navigate, user.token]);

    return null;
}

export default Logout;