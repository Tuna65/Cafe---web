import './MessageForm.css';

function MessageForm({ hiden }) {
    return (
        <div className="message__form-wrappers" style={hiden === 2 ? { display: 'block' } : { display: 'none' }}>
            <form action="" className="form__send">
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your Email" />
                <input type="text" placeholder="Your Phone" />
                <textarea name="" id="" cols="30" rows="8" placeholder="Your Message"></textarea>
                <input type="submit" value="SUBMIT FORM" className="submit" id="send" />
            </form>
        </div>
    );
}

export default MessageForm;
