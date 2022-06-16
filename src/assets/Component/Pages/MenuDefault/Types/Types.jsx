import PostMenu from '../../../Content/OurMenu/PostMenu/PostMenu';
import Intro from '../../../Intro/Intro';

import './Types.css';

function Types({ img, items, title, note, reverse }) {
    return (
        <div className="grid type__container">
            <div
                className="row no-gutters"
                style={reverse ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' }}
            >
                <div className="col l-3 type__container-img">
                    <img src={img} alt="" className="" />
                </div>
                <div className="col l-9 type__container-right">
                    <div className="inner__right grid">
                        <div className="type__intro">
                            <Intro title={title} note={note} paragraph={''} margin={true} />
                        </div>
                        <div className="row type__list">
                            {items.map((item, index) => {
                                return (
                                    <div className="col l-6 c-12 items" key={index}>
                                        <PostMenu
                                            path={item.path}
                                            name={item.name}
                                            price={item.price}
                                            description={item.description}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Types;
