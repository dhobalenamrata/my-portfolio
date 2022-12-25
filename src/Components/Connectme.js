import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./ConnectStyles.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
    const form = useRef();

    const [username, setUsername] = useState('');
    const [emaill, setEmaill] = useState('');
    const [mess, setMess] = useState('');

    const showToastMessage = () => {

        toast.success("Message sent! I'll reply you soon", {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        // alert("Message Sent. I'll reply you soon");
        // toast("Wow so easy!");
        // toast.success('Success Notification !', {
        //     position: toast.POSITION.TOP_RIGHT
        // });

        // 👇️ clear all input values in the form
        setUsername('');
        setEmaill('');
        setMess('');

        emailjs.sendForm('service_q7kf6x7', 'template_icsk5ih', form.current, 'EK7Bs4dMO2No7oUQJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (

        <div className='Connectclass'>
            <h1>GET IN TOUCH </h1>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name"
                    onChange={event => setUsername(event.target.value)}
                    value={username}
                />
                <label>Email</label>
                <input type="email" name="user_email"
                    onChange={event => setEmaill(event.target.value)}
                    value={emaill} />
                <label>Message</label>
                <textarea name="message"
                    onChange={event => setMess(event.target.value)}
                    value={mess} />
                <input type="submit" value="Send" onClick={showToastMessage} />
                <ToastContainer />
            </form>
        </div>
    );
};

export default ContactUs;