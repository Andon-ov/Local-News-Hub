// react Bootstrap  CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import CustomErrorBoundary from './components/CustomErrorBoundary';

import Nav from './components/singlePage/Nav';
import Cards from './components/singlePage/Cards';
import Hero from './components/singlePage/Hero';
import HorizontalCard from './components/singlePage/HorizontalCard';
import LogoAndAd from './components/singlePage/LogoAndAd';
import { NewsProvider } from './contexts/NewsContext';

import { Routes, Route, } from 'react-router-dom';
import Login from './components/Login';
import Aside from './components/singlePage/Aside';

function App() {
  return (
    <CustomErrorBoundary>
      <NewsProvider>
        <>
          <header className="header">
            <LogoAndAd />
            <Nav />
          </header>

          {/*<Routes>*/}
          {/*  <Route path="/login" element={<Login />} />*/}
          {/*</Routes>*/}

          <section className="wrapper">
            <main className="main">
              <Hero />
              <div>
                <h2 className="sectionTitle">Latest News</h2>
              </div>
              <Cards />
            </main>
       
              <Aside/>


   
          </section>
          <footer className="footer">Copyright &copy; 2023 News Portal</footer>
        </>
      </NewsProvider>
    </CustomErrorBoundary>
  );
}

export default App;
