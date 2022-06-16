import Intro from '../../Intro/Intro';
import './Description.css';

function Description() {
    const content = {
        title: 'WELCOME TO DELIZUS',
        note: 'The Art of Cookings',
        paragraph:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    };
    return (
        <div className="t__wrapper">
            <div className="grid">
                <div className="row t__top">
                    <div className="col l-6 c-12 t__top-img">
                        <div></div>
                    </div>
                    <div className="col l-6 c-12">
                        <div className="t__top-content">
                            <Intro
                                title={content.title}
                                note={content.note}
                                paragraph={content.paragraph}
                                margin={false}
                            />
                        </div>
                        <button className="btn ">READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Description;
