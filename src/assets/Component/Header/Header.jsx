import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo-2.png';
import logo2 from '../../img/logo.png';
import { scrollContext } from '../../../ScrollContext';

import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const scroll = useContext(scrollContext);

    const [isHiddenMenu, setIsHiddenMenu] = useState(false);

    return (
        <>
            <div
                className="h__wrapper"
                style={
                    scroll.isBackground
                        ? { backgroundColor: '#18181d', padding: '20px 0' }
                        : { backgroundColor: 'transparent', padding: '0' }
                }
            >
                <div className="h__content">
                    <Link to="/">
                        <img src={logo} alt="" />
                        <img src={logo2} alt="" className="h__content-img" />
                    </Link>
                    <ul className="h__list">
                        <li>
                            <Link to="/">
                                HOME
                                <span className="h__list-home">Home Slider</span>
                            </Link>
                        </li>
                        <li>
                            MENU
                            <ul className="h__list-menu">
                                <li>
                                    <Link to="/menudefault">Menu Default</Link>
                                </li>
                                <li>
                                    <>Menu Thumbnails</>
                                </li>
                                <li>
                                    <>Menu Tabs</>
                                </li>
                                <li>
                                    <>Menu ItemSingle</>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/about-us">ABOUT US</Link>
                        </li>
                        <li>
                            <Link to="/event">EVENTS</Link>
                        </li>
                        <li>
                            <Link to="/contact">CONTACT</Link>
                        </li>
                    </ul>

                    {/*  */}
                    <ul className="h__list-mini" style={isHiddenMenu ? { display: 'flex' } : { display: 'none' }}>
                        <li>
                            <Link to="/">
                                HOME
                                <span className="h__list-home-mini">Home Slider</span>
                            </Link>
                        </li>
                        <li>
                            MENU
                            <ul className="h__list-menu-mini">
                                <li>
                                    <Link to="/menudefault">Menu Default</Link>
                                </li>
                                <li>
                                    <>Menu Thumbnails</>
                                </li>
                                <li>
                                    <>Menu Tabs</>
                                </li>
                                <li>
                                    <>Menu ItemSingle</>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/about-us">ABOUT US</Link>
                        </li>
                        <li>
                            <Link to="/event">EVENTS</Link>
                        </li>
                        <li>
                            <Link to="/contact">CONTACT</Link>
                        </li>
                    </ul>
                    <div
                        className="h__icon-menu"
                        onClick={() => {
                            setIsHiddenMenu(true);
                        }}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <div
                        className="h__icon-del"
                        onClick={() => {
                            setIsHiddenMenu(false);
                        }}
                        style={isHiddenMenu ? { display: 'flex' } : { display: 'none' }}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
