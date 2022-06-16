import { faImage } from '@fortawesome/free-regular-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import Card from './Card/Card';

import pic1 from '../../img/pic_1.jpg';
import pic2 from '../../img/pic_2.jpg';
import pic3 from '../../img/pic_3.jpg';

import './OutStanding.css';

function OutStanding() {
    const url = 'https://www.youtube.com/embed/If2rE7Sagyw';
    return (
        <div className="o__wrapper">
            <div className="grid wide ">
                <div className="row">
                    <div className=" col l-4 c-12">
                        <Card img={pic1} icon={faPlay} urlImg={null} urlVideo={url} />
                    </div>
                    <div className=" col l-4 c-12">
                        <Card img={pic2} icon={faImage} urlImg={pic2} ulrVideo={null} />
                    </div>
                    <div className=" col l-4 c-12">
                        <Card img={pic3} icon={faImage} urlImg={pic3} ulrVideo={null} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OutStanding;
