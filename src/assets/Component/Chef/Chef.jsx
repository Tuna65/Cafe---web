import Intro from '../Intro/Intro';

import './Chef.css';

import chef1 from './../../img/chef1.jpg';
import chef2 from './../../img/chef2.jpg';
import chef3 from './../../img/chef3.jpg';

function Chef() {
    const intro = { title: 'MEET', note: 'Our Team', paragraph: '' };

    const chefInfos = [
        {
            path: chef1,
            name: 'Ben Sheridan',
            level: 'Master Chef',
            descriptions:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.',
        },
        {
            path: chef2,
            name: 'Sophie Lana',
            level: 'Senior Chef',
            descriptions:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.',
        },
        {
            path: chef3,
            name: 'James Hoult',
            level: 'Guest Chef',
            descriptions:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.',
        },
    ];

    return (
        <div className="chef__wrapper">
            <div className="chef__intro">
                <Intro title={intro.title} note={intro.note} paragraph={intro.paragraph} margin={true} />
            </div>
            <div className="grid wide">
                <div className="row">
                    {chefInfos.map((chefInfo, index) => {
                        return (
                            <div className="col l-4 chef__card" key={index}>
                                <div className="chef__img">
                                    <img src={chefInfo.path} alt="" />
                                </div>
                                <h4>{chefInfo.name}</h4>
                                <p>{chefInfo.level}</p>
                                <span></span>
                                <p>{chefInfo.descriptions}</p>
                                <a href="a">READ MORE</a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Chef;
