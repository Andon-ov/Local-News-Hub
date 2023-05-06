// react Bootstrap  CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import CustomErrorBoundary from './components/CustomErrorBoundary';

import Nav from './components/singlePage/Nav';
import LogoAndAd from './components/singlePage/LogoAndAd';
import Login from './components/Login';
import SinglePage from './components/singlePage/singlePage';

import {NewsProvider} from './contexts/NewsContext';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
    return (
        <CustomErrorBoundary>
            <NewsProvider>
                <Router>
                    <>
                        <header className="header">
                            <LogoAndAd/>
                            <Nav/>
                        </header>

                        <Routes>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/" element={<SinglePage/>}/>
                            {/* Other routes */}
                        </Routes>

                        <footer className="footer">
                            Copyright &copy; 2023 News Portal
                        </footer>
                    </>
                </Router>
            </NewsProvider>
        </CustomErrorBoundary>
    );
}

export default App;
