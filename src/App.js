// react Bootstrap  CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import CustomErrorBoundary from './components/CustomErrorBoundary';
import {NewsProvider} from './contexts/NewsContext';
import {AuthProvider} from './contexts/AuthContext';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Nav from './components/singlePage/Nav';
import LogoAndAd from './components/singlePage/LogoAndAd';
import Login from './components/Login';
import SinglePage from './components/singlePage/singlePage';
import Register from './components/Register';
import Logout from './components/Logout';


function App() {

    return (
        <CustomErrorBoundary>
            <AuthProvider>

                <NewsProvider>
                    <Router>
                        <>
                            <header className="header">
                                <LogoAndAd/>
                                <Nav/>
                            </header>

                            <Routes>
                                <Route path="/login" element={<Login/>}/>
                                <Route path="/register" element={<Register/>}/>
                                <Route path="/logout" element={<Logout/>}/>
                                <Route path="/" element={<SinglePage/>}/>
                            </Routes>

                            <footer className="footer">
                                Copyright &copy; 2023 News Portal
                            </footer>
                        </>
                    </Router>
                </NewsProvider>
            </AuthProvider>
        </CustomErrorBoundary>
    );
}

export default App;
