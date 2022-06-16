import Intro from '../../../Intro/Intro';
import './Details.css';

function Details({ title, note, paragraph, margin, img, reverse, padding }) {
    return (
        <div className="details__wrapper">
            <div className="grid">
                <div className="row" style={reverse ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' }}>
                    <div className="col l-6 details__img">
                        <img src={img} alt="" />
                    </div>
                    <div
                        className="col l-6 details__i4"
                        style={
                            padding
                                ? { paddingLeft: '40rem', paddingRight: '10rem' }
                                : { paddingRight: '40rem', paddingLeft: '10rem' }
                        }
                    >
                        <Intro title={title} note={note} paragraph={paragraph} margin={margin} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
