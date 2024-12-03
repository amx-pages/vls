import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useLocation } from 'react-router-dom';  // Import useLocation to access passed state

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
            alert("Message sent successfully!");
            formRef.current.reset();  // Reset the form
            setMessage('');  // Optionally clear the message after sending
        }, (error) => {
            console.log(error.text);
            alert("Failed to send the message, please try again.");
        })
        .finally(() => {
            setIsSubmitting(false);  // Re-enable the button after the operation is complete
        });
    };

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Contact Us</h1>
            <form className="mx-auto" style={{ maxWidth: '600px' }} onSubmit={sendEmail} ref={formRef}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        rows="4"
                        required
                        value={message}  // Bind the message state to the textarea
                        onChange={handleMessageChange}  // Allow users to change the message
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
}

export default Contact;
