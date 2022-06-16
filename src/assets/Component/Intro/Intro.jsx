import './Intro.css';

function Intro({ title, note, paragraph, margin }) {
    return (
        <div className="intro__wrapper">
            <h5>{title}</h5>
            <span>{note}</span>
            <div>
                <span style={margin ? { margin: 'auto' } : { margin: '0' }}></span>
            </div>
            <p>{paragraph}</p>
        </div>
    );
}

export default Intro;
