import { Link } from 'react-router-dom';
import './PostMenu.css';

function PostMenu({ path, name, price, description }) {
    return (
        <div className="pm__wrapper">
            <div className="service__item">
                <Link to="/item-page">
                    <img src={path} alt="" className="service__item-img" />
                </Link>
                <div className="service__item-info">
                    <Link to="/item-page">
                        <div className="name-price">
                            <span className="item__name">{name}</span>
                            <span></span>
                            <span className="item__price">{price}</span>
                        </div>
                    </Link>
                    <p className="sevice-description">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default PostMenu;
