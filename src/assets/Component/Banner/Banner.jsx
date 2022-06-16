import './Banner.css';

function Banner({ title, note }) {
    return (
        <div className="banner__wrapper">
            <div className="banner__inner">
                <h5>{title}</h5>
                <span>{note}</span>
            </div>
        </div>
    );
}

export default Banner;
