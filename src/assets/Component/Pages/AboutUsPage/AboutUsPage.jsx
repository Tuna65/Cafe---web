import Banner from '../../Banner/Banner';
import Count from './../../../Component/Content/Count/Count';
import './AboutUsPage.css';
import Details from './Details/Details';

import img1 from '../../../img/bg-side-1-1.jpg';
import img2 from '../../../img/bg-side-2-1.jpg';
import Chef from '../../Chef/Chef';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import TabToTop from '../../TabToTop/TabToTop';

function AboutUsPage() {
    const info = {
        if1: {
            title: 'WELCOME TO DELIZUS',
            note: 'Who We Are',
            paragraph:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        if2: {
            title: 'RESTAURANT',
            note: 'Cozy & Romantic',
            paragraph:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
    };

    return (
        <div className="au__wrapper">
            <div className="au__header">
                <Header />
            </div>
            <div className="au__wrapper-banner" id="Top">
                <Banner title={'ABOUT US'} note={'WHO WE ARE'} />
            </div>

            <Details
                title={info.if1.title}
                note={info.if1.note}
                paragraph={info.if1.paragraph}
                margin={false}
                img={img1}
                reverse={false}
            />
            <Details
                title={info.if2.title}
                note={info.if2.note}
                paragraph={info.if2.paragraph}
                margin={false}
                img={img2}
                reverse={true}
            />
            <Chef />
            <Count />
            <Footer />
            <TabToTop />
        </div>
    );
}

export default AboutUsPage;
