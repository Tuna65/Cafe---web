import { createRoot } from 'react-dom';
import React, { useRef } from 'react';

import shrimp from '../../../../img/2-2.jpg';
import crab from '../../../../img/2-6.jpg';
import gras from '../../../../img/3-6.jpg';
import chicken from '../../../../img/1-7.jpg';
import './S_Card.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import Intro from '../../../Intro/Intro';
import Layout from '../../../Layout/Layout';

function SCard() {
    const container = useRef();

    const menus = [
        {
            path: shrimp,
            name: 'Cheese Shrimp Roll',
            price: '$42',
        },
        {
            path: crab,
            name: 'Baked Crab Cheese',
            price: '$66',
        },
        {
            path: gras,
            name: 'Foie Gras',
            price: '$99',
        },
        {
            path: chicken,
            name: 'Roasted Chicken',
            price: '$55',
        },
    ];

    const content = {
        title: "TODAY'S SPECIAL",
        note: 'The Art of Cookings',
        paragraph: '',
    };

    return (
        <div className="scard__wrapper">
            <div className="scard__title">
                <Intro title={content.title} note={content.note} paragraph={content.paragraph} margin={true} />
            </div>

            <div className="grid wide">
                <div className="row">
                    {menus.map((menu, index) => (
                        <div className="col l-3 s__card" key={index}>
                            <div className="s__img">
                                <img src={menu.path} alt="" />
                                <span className="s__card-layout"></span>
                                <span className="s__card-boder-layout"></span>
                                <span className="s__card-icon">
                                    <FontAwesomeIcon
                                        icon={faImage}
                                        onClick={() => {
                                            const root = createRoot(container.current);
                                            root.render(<Layout urlImg={menu.path} urlVideo={null} />);
                                        }}
                                    />
                                </span>
                            </div>
                            <h5>{menu.name}</h5>
                            <span></span>
                            <span>{menu.price}</span>
                            <div ref={container}></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SCard;
