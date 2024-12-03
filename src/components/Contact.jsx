// src/components/Contact.jsx
import React, { useRef, useState, useEffect, useContext } from 'react';
import emailjs from 'emailjs-com';
import { useLocation } from 'react-router-dom';  // Import useLocation to access passed state
import { LanguageContext } from '../contexts/LanguageContext';  // Import the context

function Contact() {
    const formRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');
    
    // Get the passed state from the previous page (e.g., pricing)
    const location = useLocation();
    
    // If there's a 'text' parameter passed through the location state, set it as the message
    useEffect(() => {
        if (location.state?.text) {
            setMessage(location.state.text);  // Pre-fill the message with the passed text
        }
    }, [location.state?.text]);

    // Handle input change to allow users to add text
    const handleMessageChange = (e) => {
        setMessage(e.target.value);  // Update the message with user input
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);  // Disable the button to prevent multiple clicks
        // Send the form data using EmailJS
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then((result) => {
            console.log(result.text);
            alert(translations.messageSent);  // Use translated success message
            formRef.current.reset();  // Reset the form
            setMessage('');  // Optionally clear the message after sending
        }, (error) => {
            console.log(error.text);
            alert(translations.messageFailed);  // Use translated failure message
        })
        .finally(() => {
            setIsSubmitting(false);  // Re-enable the button after the operation is complete
        });
    };

    // Access translations from context
    const { translations } = useContext(LanguageContext);

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">{translations.contactUs}</h1>  {/* Translated heading */}
            <form className="mx-auto" style={{ maxWidth: '600px' }} onSubmit={sendEmail} ref={formRef}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">{translations.name}</label>  {/* Translated label */}
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">{translations.email}</label>  {/* Translated label */}
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">{translations.message}</label>  {/* Translated label */}
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
                    {isSubmitting ? translations.sending : translations.sendMessage}  {/* Translated button text */}
                </button>
            </form>
        </div>
    );
}

export default Contact;
