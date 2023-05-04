// react Bootstrap  CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Carousel from './components/Carousel';
import Nav from './components/Nav';
import TabsNav from './components/TabsNav';
import Card from './components/Card';

function App() {
  return (
    <>
      <header className="header">
        <Nav />
      </header>
      <main className="main">
        <section className="hero">
          <Carousel />
          <TabsNav />
        </section>
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
      <footer className="footer"></footer>
    </>
  );
}

export default App;
