import './DetailFood.css';

import img from '../../../../img/1-2.jpg';

function DetailFood() {
    return (
        <div className="foot-content">
            <div className="grid foot__inner">
                <div className="row">
                    <div className="col l-6 c-12 foot__img">
                        <img src={img} alt="" />
                    </div>
                    <div className="col l-6 c-12 foot__details">
                        <div className="foot__price">
                            <span>$66</span>
                            <span>2 - 4 Persons</span>
                        </div>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                            consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                            dolore magnam aliquam quaerat voluptatem.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailFood;
