// react Bootstrap  CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import CustomErrorBoundary from './components/CustomErrorBoundary';

import Nav from './components/singlePage/Nav';
import Cards from './components/singlePage/Cards';
import Hero from './components/singlePage/Hero';
import HorizontalCard from './components/singlePage/HorizontalCard';
import LogoAndAd from './components/singlePage/LogoAndAd';
import {NewsProvider} from './contexts/NewsContext';

function App() {
    return (
        <CustomErrorBoundary>
            <NewsProvider>
                <>
                    <header className="header">
                        <LogoAndAd/>
                        <Nav/>
                    </header>
                    <section className="wrapper">
                        <main className="main">
                            <Hero/>
                            <div>
                                <h2 className="sectionTitle">Latest News</h2>
                            </div>
                            <Cards/>
                        </main>
                        <aside className="aside">
                            <HorizontalCard/>
                            <HorizontalCard/>
                            <HorizontalCard/>
                            <HorizontalCard/>
                            <HorizontalCard/>
                        </aside>
                    </section>
                    <footer className="footer">Copyright &copy; 2023 News Portal</footer>
                </>
            </NewsProvider>
        </CustomErrorBoundary>
    );
}

export default App;
