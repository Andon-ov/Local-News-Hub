// react Bootstrap  CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Nav from './components/header/Nav';
// import TabsNav from './components/TabsNav';
import Card from './components/Card';
import Hero from './components/Hero';

import HorizontalCard from './components/HorizontalCard';

import LogoAndAd from './components/header/LogoAndAd';

function App() {
  return (
    <>
      <header className="header">
        <LogoAndAd />
        <Nav />
      </header>
      <section className="wrapper">
        <main className="main">
          <Hero />
          <div>
            <h2 className="sectionTitle">Latest News</h2>
          </div>
          <section className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
        </main>
        <aside className="aside">
          {/* <TabsNav /> */}
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
        </aside>
      </section>
      <footer className="footer">Copyright &copy; 2023 News Portal</footer>
    </>
  );
}

export default App;
