import Banner from '../../Banner/Banner';

import bgimg from '../../../img/bg-side-3.jpg';
import bgimg1 from '../../../img/bg-side-4.jpg';
import bgimg2 from '../../../img/bg-side-5.jpg';

import img1 from './../../../img/1-3.jpg';
import img2 from './../../../img/1-7.jpg';
import img3 from './../../../img/2-2.jpg';
import img4 from './../../../img/2-6.jpg';
import img5 from './../../../img/3-6.jpg';
import img6 from './../../../img/4.jpg';
import img7 from './../../../img/1-4.jpg';
import img8 from './../../../img/2-3.jpg';
import img9 from './../../../img/3-3.jpg';
import img10 from './../../../img/4-1.jpg';
import img11 from './../../../img/5-1.jpg';
import img12 from './../../../img/6-1.jpg';
import img13 from './../../../img/1-5.jpg';
import img14 from './../../../img/2-4.jpg';
import img15 from './../../../img/3-4.jpg';
import img16 from './../../../img/4-2.jpg';
import img17 from './../../../img/5-2.jpg';
import img18 from './../../../img/6-2.jpg';

import './MenuDefault.css';
import Types from './Types/Types';
import BookNow from '../../BookNow/BookNow';
import Footer from '../../Footer/Footer';
import TabToTop from '../../TabToTop/TabToTop';
import Header from '../../Header/Header';

function MenuDefaultPage() {
    const main = [
        {
            path: img1,
            name: 'Chickem soup',
            price: '$8',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            path: img4,
            name: 'Baked Crab Chees',
            price: '$8',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            path: img5,
            name: 'Foie Gras',
            price: '$8',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            path: img6,
            name: 'Crispy Squid	',
            price: '$8',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            path: img2,
            name: 'Roasted Chicken	',
            price: '$8',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            path: img3,
            name: 'Cheese Shrimp Roll	',
            price: '$8',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
    ];
    const starter = [
        {
            path: img7,
            name: 'Chickem soup',
            price: '$8',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            path: img8,
            name: 'Caprese Salad	',
            price: '$8',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            path: img9,
            name: 'Polpette	',
            price: '$8',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            path: img10,
            name: 'Waffle',
            price: '$8',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            path: img11,
            name: 'Caprino',
            price: '$8',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            path: img12,
            name: 'Calamary',
            price: '$10',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
    ];

    const drink = [
        {
            path: img13,
            name: 'Limeade',
            price: '$5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            path: img14,
            name: 'Iced Tea	',
            price: '$3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            path: img15,
            name: 'Milk Shake',
            price: '$5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            path: img16,
            name: 'Orange Juice	',
            price: '$3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            path: img17,
            name: 'Hot Tea',
            price: '$3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            path: img18,
            name: 'Coffee',
            price: '$3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
    ];
    return (
        <div className="md__wrapper">
            <div id="Top"></div>
            <div className="md__wrapper-header">
                <Header />
            </div>
            <div className="md__wrapper-banner">
                <Banner title={'OUR MENU'} note={'FOOD & DRINKS'} />
            </div>

            <Types img={bgimg} items={main} title={'MAINS'} note={'Fresh and delicious'} reverse={false} />
            <Types img={bgimg1} items={starter} title={'STARTER'} note={'Fresh and delicious'} reverse={true} />
            <Types img={bgimg2} items={drink} title={'DRINKS'} note={'Fresh and delicious'} reverse={false} />

            <BookNow />

            <Footer />
            <TabToTop />
        </div>
    );
}

export default MenuDefaultPage;
