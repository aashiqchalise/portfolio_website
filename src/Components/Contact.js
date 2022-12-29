import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ContactInfo from './ContactInfo';
import emailjs from '@emailjs/browser';
import { useRef } from "react"

const Contact = () => {
    const form = useRef();

    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setDone(true);
        emailjs.sendForm('service_7cqdgyj', 'template_w3c0638', form.current, '7QOIZEV3dGrILFF8h')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    const cinfo = [
        {
            iconn: faUser,
            title: 'Name',
            ans: 'Aashiq Chalise'
        },
        {
            iconn: faPhone,
            title: 'Phone',
            ans: '9867145428'
        },
        {
            iconn: faLocationDot,
            title: 'Address',
            ans: 'Kathmandu, Nepal'
        },
        {
            iconn: faEnvelope,
            title: 'Email',
            ans: 'asq.chalise@gmail.com'
        }
    ]
    const socialIcon = [
        {
            url: "https://www.facebook.com/profile.php?id=100007708366429",
            socialicon: faFacebook,
            abc: { color: '#3b5998 ' }
        },
        {
            url: "https://www.instagram.com/aashiq.chalise/?hl=en",
            socialicon: faInstagram,
            abc: { color: 'crimson' }
        },
        {
            url: "https://www.linkedin.com/in/aashiq-chalise-74a585209/",
            socialicon: faLinkedin,
            abc: { color: '#0e76a8' }
        },
        {
            url: "https://github.com/aashiqchalise",
            socialicon: faGithub,
            abc: {color: "#171515"}
        }
    ]
    return (
        <div id='contact'>
            <div className="container" style={{ paddingTop: "5rem" }} >
                <div className="contact-head text-center mb-5">
                    <h2 className='font-poppins'>Contact me</h2>
                    <span className='bafter bf-contact'></span>
                </div>
                <div className="contact-content">
                    <div className="row">
                        <div className="contact-left col-sm-6 pe-5">
                            <h4 className='font-poppins'>Get in Touch</h4>
                            <p className='font-poppins text-justify'>Please feel free to message me if you have any enquiries.
                                Or do contact in given informations. <br />
                                Also you can follow me on Social Sites, linkedin and Github.
                            </p>
                            <div className="contact-info">
                                {
                                    cinfo.map((nato, index) => {
                                        return (
                                            <ContactInfo key={index} iconn={nato.iconn} title={nato.title} ans={nato.ans} />
                                        )
                                    })
                                }
                                {/* --------------------- ALTERNATIVE WAY --------------------- */}

                                {/* {
                                    cinfo.map((nato, index) => {
                                        return (
                                            <>
                                                <div className="row family-poppins">
                                                    <div className="col-sm-2 text-center">
                                                        <FontAwesomeIcon icon={nato.iconn} />
                                                    </div>
                                                    <div className="col-sm-10">
                                                        <h5>{nato.title}</h5>
                                                        <p>{nato.ans}</p>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                } */}

                                {/* --------------------- ALTERNATIVE WAY --------------------- */}

                            </div>
                        </div>
                        <div className="contact-right col-sm-6 ">
                            <h4 className='message-me font-poppins'>Message Me:</h4>
                            <div className="message pt-3">
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="row">
                                        <div className="col-sm-6 mb-3">
                                            <input type="text" name='user_name' className="form-control" placeholder="name" aria-label="Username" aria-describedby="basic-addon1" required />
                                        </div>
                                        <div className="col-sm-6 mb-3">
                                            <input type="email" name='user_email' className="form-control" id="exampleFormControlInput1" placeholder="abc@example.com" required />
                                        </div>
                                        <div className="col-sm-12 mb-3">
                                            <input type="text" name='user_subject' className="form-control" placeholder="subject" aria-label="Username" aria-describedby="basic-addon1" required />
                                        </div>
                                        <div className="col-sm-12 mb-3">
                                            <textarea name='message' className="form-control" id="exampleFormControlTextarea1" placeholder='message...' rows="3" required></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                    {
                                        done && <div className='text-success mt-3' style={{fontSize: "18px"}} >Your has been message sent successfuly !!!</div>
                                    }
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="social-icon mb-3">
                    {
                        socialIcon.map((nato, index) => {
                            return (
                                <a key={index} href={nato.url} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={nato.socialicon} style={nato.abc} /></a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Contact
