// react Bootstrap  CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import CustomErrorBoundary from './components/CustomErrorBoundary';
import {NewsProvider} from './contexts/NewsContext';
import {AuthProvider} from './contexts/AuthContext';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Nav from './components/singlePage/Nav';
import LogoAndAd from './components/singlePage/LogoAndAd';
import Login from './components/Login';
import SinglePage from './components/singlePage/singlePage';
import Register from './components/Register';
import Logout from './components/Logout';
import Details from './components/Details';
import Aside from './components/aside/Aside';
import NoMatch from "./components/NoMatch";


function App() {

    return (
        <CustomErrorBoundary>
            <AuthProvider>
                <NewsProvider>
                    <BrowserRouter>
                        <>
                            <header className="header">
                                <LogoAndAd/>
                                <Nav/>
                            </header>
                            <section className="wrapper">
                                <Routes>
                                    <Route path="/" element={<SinglePage/>}/>
                                    <Route path="/login" element={<Login/>}/>
                                    <Route path="/register" element={<Register/>}/>
                                    <Route path="/logout" element={<Logout/>}/>
                                    <Route path="/news/:newsId" element={<Details/>}/>
                                    <Route path="*" element={<NoMatch/>}/>
                                </Routes>
                                <Aside/>
                            </section>
                            <footer className="footer">
                                Copyright &copy; 2023 News Portal
                            </footer>
                        </>
                    </BrowserRouter>
                </NewsProvider>
            </AuthProvider>
        </CustomErrorBoundary>
    );
}

export default App;
