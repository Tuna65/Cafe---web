import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from '../../img/1-8.jpg';
import img2 from '../../img/2-7.jpg';
import img3 from '../../img/3.jpg';

import './PartyCard.css';

function PartyCard() {
    const events = [
        {
            path: img1,
            title: 'Barbeque Party',
            date: '13 July 2017',
            time: '12:00 - 13:30',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        },
        {
            path: img2,
            title: 'Barbeque Party',
            date: '13 July 2017',
            time: '12:00 - 13:30',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        },
        {
            path: img3,
            title: 'Barbeque Party',
            date: '13 July 2017',
            time: '12:00 - 13:30',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        },
        {
            path: img1,
            title: 'Barbeque Party',
            date: '13 July 2017',
            time: '12:00 - 13:30',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        },
        {
            path: img2,
            title: 'Barbeque Party',
            date: '13 July 2017',
            time: '12:00 - 13:30',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        },
        {
            path: img3,
            title: 'Barbeque Party',
            date: '13 July 2017',
            time: '12:00 - 13:30',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        },
    ];
    return (
        <div className="partycard__wrapper">
            <div className="grid wide">
                <div className="row">
                    {events.map((event, index) => {
                        return (
                            <div className="col l-4 pc__inner">
                                <div className="pc__img">
                                    <img src={event.path} alt="" />
                                </div>
                                <h5>{event.title}</h5>
                                <div className="pc__time">
                                    <span className="time__days">
                                        <FontAwesomeIcon icon={faCalendar} />
                                        <p>{event.date}</p>
                                    </span>
                                    <span className="time__hours">
                                        <FontAwesomeIcon icon={faClock} />

                                        <p>{event.time}</p>
                                    </span>
                                </div>
                                <p>{event.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default PartyCard;
