import React from 'react';
import emailjs from 'emailjs-com';

//images
import ContactImg from '../images/contactImg.jpg'

const Contact = () => {

    const handleSend = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_z428ec4', 'template_4n5i26z', e.target, 'user_E81PrdLCXvSnLdKNcgvIU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <>
            <div id="Contact" className="Contact">
                <img className="Contact__img" src={ContactImg} alt=""/>
                <div className="Contact__container">
                    <h2 className="Contact__container__title" >Get In Touch</h2>
                    <form className="Contact__container__form" onSubmit={handleSend}>
                        <input type="hidden" name="contact_number" />
                        <label>Name</label>
                        <input type="text" name="user_name" required/>
                        <label>Email</label>
                        <input type="email" name="user_email" required/>
                        <label>Phone</label>
                        <input type="tel" name="user_phone" />
                        <label>Message</label>
                        <textarea required className="Contact__container__form__textarea" name="message" />
                        <button className="button" type="submit">Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;