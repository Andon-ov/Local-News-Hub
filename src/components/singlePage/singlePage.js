import Cards from './Cards';
import Hero from './Hero';
import Aside from './Aside';

function SinglePage() {
    return (
        <section className="wrapper">
            <main className="main">
                <Hero/>
                <div>
                    <h2 className="sectionTitle">Latest News</h2>
                </div>
                <Cards/>
            </main>

            <Aside/>
        </section>
    );
}

export default SinglePage;
