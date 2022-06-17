import './OurMenu.css';
import Intro from '../../Intro/Intro';
import PostMenu from './PostMenu/PostMenu';
import img from './../../../img/1-3.jpg';
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
import { useState } from 'react';

function OurMenu() {
    const content = {
        title: 'OUR MENU',
        note: 'Healthy & Tasty',
        paragraph: '',
    };

    const main = [
        {
            path: img,
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

    const [options, setOptions] = useState(main);

    const [activeList, setActiveList] = useState('li-1');

    const handleOnclick = (item) => {
        setOptions(item);
    };
    const handleOnMountDown = (index) => {
        setActiveList(index);
    };
    return (
        <div className="om__wrapper">
            <div className="om__title">
                <Intro title={content.title} note={content.note} paragraph={content.paragraph} margin={true} />
            </div>

            <ul className="om__list">
                <li
                    onClick={() => handleOnclick(main)}
                    onMouseDown={() => handleOnMountDown('li-1')}
                    className={activeList === 'li-1' ? 'active' : ''}
                >
                    MAIN
                </li>
                <li
                    onClick={() => handleOnclick(starter)}
                    onMouseDown={() => handleOnMountDown('li-2')}
                    className={activeList === 'li-2' ? 'active' : ''}
                >
                    STARTER
                </li>
                <li
                    onClick={() => handleOnclick(drink)}
                    onMouseDown={() => handleOnMountDown('li-3')}
                    className={activeList === 'li-3' ? 'active' : ''}
                >
                    DRINKS
                </li>
            </ul>

            <div className="om__post grid">
                <div className="row">
                    {options.map((item, index) => {
                        return (
                            <div className="col l-6 c-12 items" key={index}>
                                <PostMenu
                                    path={item.path}
                                    name={item.name}
                                    price={item.price}
                                    description={item.description}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default OurMenu;
