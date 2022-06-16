import React, { useRef, useState } from 'react';
import './Layout.css';
import './Layout.css';
import Iframe from 'react-iframe';

function Layout({ urlImg, urlVideo }) {
    const layout = useRef();

    const [srcImg, setSrcImg] = useState(urlImg);
    const [srcVideo, setSrcVideo] = useState(urlVideo);
    const handleOnclick = () => {
        layout.current.style.display = 'none';
        setSrcImg('');
        setSrcVideo('');
    };

    return (
        <div className="layout__wrapper" onClick={handleOnclick} ref={layout}>
            <div className="layout__inner">
                <div className="layout__inner-container">
                    <img src={srcImg} alt="" />
                    <Iframe src={srcVideo} id="myId" className="myClassname" display="initial" position="relative" />
                </div>
            </div>
        </div>
    );
}

export default Layout;
