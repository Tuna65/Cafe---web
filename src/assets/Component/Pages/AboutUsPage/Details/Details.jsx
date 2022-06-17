import Intro from '../../../Intro/Intro';
import './Details.css';

function Details({ title, note, paragraph, margin, img, reverse }) {
    return (
        <div className="details__wrapper">
            <div className="grid">
                <div className="row" style={reverse ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' }}>
                    <div className="col l-6 m-6 c-12 details__img">
                        <img src={img} alt="" />
                    </div>
                    <div className="col l-4 m-6 c-12 details__i4">
                        <Intro title={title} note={note} paragraph={paragraph} margin={margin} />
                    </div>
                    <div className="col l-2"></div>
                </div>
            </div>
        </div>
    );
}

export default Details;
