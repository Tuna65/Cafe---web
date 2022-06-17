import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ContactForm.css';

function ContactForm({ hiden }) {
    const infoConstact = [
        {
            icon: faLocationDot,
            type: 'Address',
            content: 'Collins Street West, Victoria 8007 Australia',
        },
        {
            icon: faPhone,
            type: 'Phone',
            content: '(208) 333 9296',
        },
        {
            icon: faEnvelope,
            type: 'Email',
            content: 'delizus@oceanthemes.net',
        },
    ];

    return (
        <div className="grid contact__info" style={hiden === 1 ? { display: 'block' } : { display: 'none' }}>
            <div className="row">
                {infoConstact.map((value, index) => {
                    return (
                        <div className="col l-4 m-4 c-12 contact__position" key={index}>
                            <FontAwesomeIcon icon={value.icon} />
                            <h5>{value.type}</h5>
                            <p>{value.content}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ContactForm;
