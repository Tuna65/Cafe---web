import Top from '../../top/top';
import OutStanding from '../../OutStanding/OutStanding';
import Content from '../../Content/Content';
import TabToTop from '../../TabToTop/TabToTop';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

function HomePage() {
    return (
        <div className="home__wrapper">
            <Header />
            <Top />
            <OutStanding />
            <Content />
            <TabToTop />
            <Footer />
        </div>
    );
}

export default HomePage;
