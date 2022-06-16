import './Event.css';
import Intro from '../../Intro/Intro';
import EItem from './E_item/E_item';

function Event() {
    const content = {
        title: 'LATEST EVENTS',
        note: 'Come & Join',
        paragraph: '',
    };
    return (
        <div className="e__wrapper">
            <div className="e__intro">
                <Intro title={content.title} note={content.note} paragraph={content.paragraph} margin={true} />
            </div>
            <div className="e__item">
                <EItem />
            </div>
        </div>
    );
}

export default Event;
