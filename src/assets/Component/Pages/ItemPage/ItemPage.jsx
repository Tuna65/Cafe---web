import Banner from '../../Banner/Banner';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Intro from '../../Intro/Intro';
import DetailFood from './DetailFood/DetailFood';

import './ItemPage.css';
import ListFood from './ListFood/ListFood';

function ItemPage() {
    return (
        <div className="item__page-wrapper">
            <div className="item__page-header">
                <Header />
            </div>
            <div className="item__page-banner">
                <Banner title={'CHICKEN CRISPY ROLL'} note={'MENU ITEM'} />
            </div>

            <DetailFood />
            <div className="item__page-intro">
                <Intro title={'YOU MAY ALSO LIKE'} note={'Mains Menu'} paragraph={''} margin={true} />
            </div>
            <ListFood />
            <Footer />
        </div>
    );
}

export default ItemPage;
