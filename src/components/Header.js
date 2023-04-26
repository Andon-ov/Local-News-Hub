import TopHeader from './TopHeader';
import MidHeader from './MidHeader';
import BottomHeader from './BottomHeader';

function Header() {
    return (
        <header>
            <div className="header-area">
                <div className="main-header ">

                    <TopHeader />

                    <MidHeader />
                    
                    <BottomHeader />

                </div>
            </div>
        </header>
    );
}

export default Header;