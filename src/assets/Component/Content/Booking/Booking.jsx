import Intro from '../../Intro/Intro';
import './Booking.css';

function Booking() {
    const content = {
        title: 'BOOK A TABLE',
        note: 'Reservation',
        paragraph: '',
    };
    return (
        <div className="b__wrapper">
            <div className="b__blur"></div>
            <form action="" className="b__form">
                <div className="b__intro">
                    <Intro title={content.title} note={content.note} paragraph={content.paragraph} margin={true} />
                </div>
                <div className="form__book">
                    <div className="form__pic">
                        <div className="pic">
                            <label>Date</label>
                            <input type="text" />
                        </div>
                        <div className="pic">
                            <label>Time</label>
                            <input type="text" />
                        </div>

                        <div className="pic">
                            <label>Party</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="form__contact">
                        <div className="contact__inner">
                            <label>Name</label>
                            <input type="text" />
                        </div>
                        <div className="contact__inner">
                            <label>Email</label>
                            <input type="email" />
                        </div>
                        <div className="contact__inner">
                            <label>Phone</label>
                            <input type="text" />
                        </div>
                    </div>
                    <input type="submit" className="submit" value="REQUEST BOOKING" />
                </div>
            </form>
        </div>
    );
}

export default Booking;
