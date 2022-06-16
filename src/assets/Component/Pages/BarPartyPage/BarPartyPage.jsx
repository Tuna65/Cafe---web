import Iframe from 'react-iframe';
import Banner from '../../Banner/Banner';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import img from './../../../img/subheader-5.jpg';

import './BarPartyPage.css';

function BarPartyPage() {
    return (
        <div className="bar__wrapper">
            <div className="bar__header">
                <Header />
            </div>
            <div className="bar__banner">
                <Banner title={'BARBEQUE PARTY'} note={'EVENT POST'} />
            </div>
            <div className="bar__content">
                <img src={img} alt="" />
                <p>
                    Nulla id rutrum nibh, vel ornare odio. Quisque ut nisi bibendum dolor aliquam malesuada. Fusce
                    molestie laoreet elit placerat molestie. Sed commodo eros vel massa vehicula, eget fringilla lectus
                    tristique. Suspendisse fermentum convallis felis, vitae finibus elit convallis in. Aliquam erat
                    volutpat. Mauris posuere ligula interdum ullamcorper accumsan. Aenean ut diam eu velit feugiat
                    iaculis eu vel augue. Vivamus suscipit volutpat nibh, at condimentum nisi accumsan mollis. Nam
                    tristique accumsan lacus. Proin ultricies est et blandit lobortis. Curabitur a pretium metus, sit
                    amet pulvinar nunc. Donec sagittis urna sit amet enim eleifend, ac finibus eros cursus. Aenean a
                    sapien sollicitudin, consequat lorem sit amet, sollicitudin justo. Morbi id mauris mauris.
                </p>

                <div className="map">
                    <Iframe
                        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d251637.95196238213!2d105.6189045!3d9.779349!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1655364968596!5m2!1svi!2s"
                        className="location"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default BarPartyPage;
