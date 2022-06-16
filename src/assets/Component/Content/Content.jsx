import Booking from './Booking/Booking';
import './Content.css';
import Count from './Count/Count';
import Description from './Description/Description';
import Event from './Event/Event';
import OurMenu from './OurMenu/OurMenu';
import Specical from './Specical/Specical';

function Content() {
    return (
        <div className="content__wrapper">
            <div className="content__inner-top">
                <Description />
                <Specical />
                <OurMenu />
            </div>
            <div className="content__inner-bottom">
                <Booking />
                <Event />
                <Count />
            </div>
        </div>
    );
}

export default Content;
