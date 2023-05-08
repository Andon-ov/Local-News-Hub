import Cards from './Cards';
import Hero from './Hero';

function SinglePage() {
    return (
        <main className="main">
            <Hero />
            <div>
                <h2 className="sectionTitle">Latest News</h2>
            </div>
            <Cards />
        </main>
    );
}

export default SinglePage;
