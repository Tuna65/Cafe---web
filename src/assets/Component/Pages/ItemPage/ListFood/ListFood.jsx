import './ListFood.css';

import img1 from '../../../../img/1-3.jpg';
import img2 from '../../../../img/2-2.jpg';
import img3 from '../../../../img/2-6.jpg';
import img4 from '../../../../img/4.jpg';
import img5 from '../../../../img/3-6.jpg';
import img6 from '../../../../img/1-7.jpg';

function ListFood() {
    const menu = [
        {
            path: img1,
            name: 'Chicken Crispy Roll',
            price: '$66',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            path: img2,
            name: 'Cheese Shrimp Roll',
            price: '$66',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            path: img3,
            name: 'Baked Crab Cheese',
            price: '$66',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            path: img4,
            name: 'Crispy Squid',
            price: '$66',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            path: img5,
            name: 'Foie Gras',
            price: '$66',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
        {
            path: img6,
            name: 'Roasted Chicken',
            price: '$66',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        },
    ];

    return (
        <div className="grid list__food-wrapper">
            <div className="row">
                {menu.map((item, index) => {
                    return (
                        <div className="col l-2 c-12" key={index}>
                            <div className="food__inner-img">
                                <img src={item.path} alt="" />
                                <span className="food__inner-name">{item.name}</span>
                            </div>
                            <div className="food__inner-details">
                                <span>{item.price}</span>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ListFood;
