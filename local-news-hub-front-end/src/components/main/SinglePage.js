import Cards from './main/Cards';
import Hero from './hero/Hero';
import './SinglePage.css';

function SinglePage() {
    return (
        <main className="main">
            <Hero/>
            <div className="sectionTitle">
                <h2>Latest News</h2>
                {/* <hr className='divider'/> */}
            </div>
            <Cards/>
        </main>
    );
}

export default SinglePage;
