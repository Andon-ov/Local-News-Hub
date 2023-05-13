// react Bootstrap  CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './joshwcomeau.css';
import './App.css';

import CustomErrorBoundary from './components/CustomErrorBoundary';
import { NewsProvider } from './contexts/NewsContext';
import { AuthProvider } from './contexts/AuthContext';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/header/nav/Nav';
import LogoAndAd from './components/header/logoAndAd/LogoAndAd';
import Login from './components/Login';
import SinglePage from './components/singlePage/SinglePage';
import Register from './components/Register';
import Logout from './components/Logout';
import Details from './components/details/Details';
import Aside from './components/aside/Aside';
import NoMatch from './components/NoMatch';
import SearchPage from './components/Search';
import TopHeader from './components/header/topHeader/TopHeader';
import Footer from './components/footer/Footer';
import Contact from './components/footer/contact/Contact';
import Advertise from './components/footer/advertise/Advertise';
import Terms from './components/footer/terms/Terms';
import Subscriptions from './components/footer/subscriptions/Subscriptions';

function App() {
  return (
    <CustomErrorBoundary>
      <AuthProvider>
        <NewsProvider>
          <BrowserRouter>
            <>
              <header className="header">
                <TopHeader />
                <LogoAndAd />
                <Nav />
              </header>
              <section className="wrapper">
                <Routes>
                  <Route path="/" element={<SinglePage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/logout" element={<Logout />} />

                  <Route path="/contact" element={<Contact />} />
                  <Route path="/advertise" element={<Advertise />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/subscriptions" element={<Subscriptions />} />

                  <Route path="/news/:newsId" element={<Details />} />
                  <Route exact path="/search/:query" component={SearchPage} />
                  <Route path="*" element={<NoMatch />} />
                </Routes>
                <Aside />
              </section>

              <Footer />
            </>
          </BrowserRouter>
        </NewsProvider>
      </AuthProvider>
    </CustomErrorBoundary>
  );
}

export default App;
