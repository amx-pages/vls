// src/components/Contact.jsx
import React, { useRef, useState, useEffect, useContext } from 'react';
import emailjs from 'emailjs-com';
import { useLocation } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';

function Contact() {
    const formRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');
    
    const location = useLocation();
    
    useEffect(() => {
        if (location.state?.text) {
            setMessage(location.state.text);
        }
    }, [location.state?.text]);

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then((result) => {
            console.log(result.text);
            alert(translations.messageSent);
            formRef.current.reset();
            setMessage('');
        }, (error) => {
            console.log(error.text);
            alert(translations.messageFailed);
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    };

    const { translations } = useContext(LanguageContext);

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">{translations.contactUs}</h1>
            <form className="mx-auto" style={{ maxWidth: '600px' }} onSubmit={sendEmail} ref={formRef}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">{translations.name}</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">{translations.email}</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">{translations.message}</label>
                    <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        rows="4"
                        required
                        value={message}
                        onChange={handleMessageChange}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? translations.sending : translations.sendMessage}
                </button>
            </form>
        </div>
    );
}

export default Contact;
