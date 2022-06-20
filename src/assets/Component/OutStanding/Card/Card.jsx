import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createRoot } from 'react-dom';

import Layout from '../../Layout/Layout';
import './Card.css';
function Card({ img, icon, urlImg, urlVideo }) {
    const container = useRef();

    return (
        <div className="o__card">
            <div className="o__img">
                <img src={img} alt="" />
                <span className="o__icon">
                    <FontAwesomeIcon
                        icon={icon}
                        onClick={() => {
                            const root = createRoot(container.current);
                            root.render(<Layout urlImg={urlImg} urlVideo={urlVideo} />);
                        }}
                    />
                </span>
            </div>

            <h3>Healthy & Tasty</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <span>READ MORE</span>
            <span ref={container}></span>
        </div>
    );
}

export default Card;
