import React, { useState, useContext } from 'react';
import { scrollContext } from '../../../../ScrollContext';

import './Count.css';

function Count() {
    const scroll = useContext(scrollContext);

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    const handleCount = (number, setNumber, limitNumber, time) => {
        setTimeout(() => {
            if (number < limitNumber) {
                setNumber(number + 10);
            }
        }, time);
    };
    if (scroll.isCount) {
        handleCount(count, setCount, 8330, 2);
        handleCount(count1, setCount1, 248, 1);
        handleCount(count2, setCount2, 852, 35);
        handleCount(count3, setCount3, 615, 50);
    }
    return (
        <div className="count__wrapper">
            <div className="count__inner">
                <div className="decount">
                    <span className="decount-number">{count}</span>
                    <span className="decount-type">Hours of Works</span>
                </div>
                <div className="decount">
                    <span className="decount-number">{count1}</span>
                    <span className="decount-type">Projects Complete</span>
                </div>
                <div className="decount">
                    <span className="decount-number">{count2}</span>
                    <span className="decount-type">Slice of Pizza</span>
                </div>
                <div className="decount">
                    <span className="decount-number">{count3}</span>
                    <span className="decount-type">Cups of Coffee</span>
                </div>
            </div>
        </div>
    );
}

export default Count;
