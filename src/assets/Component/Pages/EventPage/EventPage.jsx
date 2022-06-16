import Banner from '../../Banner/Banner';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import PartyCard from '../../PartyCard/PartyCard';

import './EventPage.css';

function EventPage() {
    return (
        <div className="event-page">
            <div className="event__header">
                <Header />
            </div>
            <div className="event__banner">
                <Banner title={'EVENTS'} note={'LATEST EVENTS FROM US'} />
            </div>
            <div className="event__container">
                <PartyCard />
            </div>
            <Footer />
        </div>
    );
}

export default EventPage;
