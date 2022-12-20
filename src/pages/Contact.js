import { useRef, useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import GooglereCAPTCHA from "react-google-recaptcha";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {

    const ContactInformation = [
        {name: 'Phone', icon : <FaPhoneAlt />, value: '+91-8592844865', src: 'javascript:void(0);'},
        {name: 'Address', icon : <FaMapMarkerAlt />, value: 'Calicut, Kerala, India', src: 'javascript:void(0);'},
        {name: 'Email', icon : <FaEnvelope />, value: 'vimalroy999@gmail.com', src: 'mailto:vimalroy999@gmail.com'}
    ];

    const initialValues = {name:"", email:"", subject:"", message:""}
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIssubmit] = useState(false);

    const handleChange = (e) =>{
		// console.log(e.target);
		const { name, value} = e.target;
		setFormValues({...formValues, [name]:value});
		// console.log(formValues);
	}

    const HandleSubmit = (e) =>{
		e.preventDefault();
		setFormErrors(validate(formValues));
		// console.log(Object.keys(formErrors).length);
		setIssubmit(true);
		
	}

    useEffect(()=>{
		// console.log(formErrors);
		var sucelement = document.getElementById("success-block");
		var failelement = document.getElementById("failure-block");
		if(Object.keys(formErrors).length === 0 && isSubmit){
			emailjs.sendForm('service_0utuqmi', 'template_3lmd564', document.getElementById("contactForm"), 'FgxkQE7o2XOSdEmLp')
			.then((result) => {
				// console.log(result.text);
				sucelement.classList.add("show-block");
				failelement.classList.remove("show-block");
			}, (error) => {
				// console.log(error.text);
				sucelement.classList.remove("show-block");
				failelement.classList.add("show-block");
			});
		}
	})

    const form = useRef();

    const sitekey = '6Lc9QcsiAAAAAPQ8e9pnqvHgkdF7gKBpEzRwTBuS';

    const validate = (values) =>{
		const errors = {}
		const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i;
		if(!values.name){
			errors.name = "Name is required";
		}
		if(!values.email){
			errors.email = "Email is required";
		}else if(!regex.test(values.email)){
			errors.email = "This is not a valid email format!";
		}
		if(!values.subject){
			errors.subject = "Subject is required";
		}
		if(!values.message){
			errors.message = "Message is required";
		} else if(values.message.length < 8){
			errors.message = "Enter minimum 8 characters";
		}
		return errors;
	}

    return (
        <div>
            <div className="page-title">
                <h1>Contact</h1>
                <div className="page-subtitle">
                    <h4> Get in Touch</h4>
                </div>
            </div>

            <div id="content" className="page-content site-content single-post" role="main">

                <div className="row">
                    <div className=" col-xs-12 col-sm-4 ">

                        <div id="info_list_1" className="info-list-w-icon">

                            {ContactInformation.map(conInfo => {
                                return (
                                <div className="info-block-w-icon" key={conInfo.name}>
                                    <div className="ci-icon">
                                        {conInfo.icon}
                                    </div>
                                    <div className="ci-text">
                                        <p>{conInfo.name}</p>
                                        <h4><a href={conInfo.src}>{conInfo.value}</a></h4>
                                    </div>
                                </div>
                                );
                            })}

                        </div>

                    </div>


                    <div className=" col-xs-12 col-sm-8 ">

                        <div className="block-title">
                            <h2>How Can I Help You?</h2>
                        </div>

                        <form id="contactForm" className="contact-form" onSubmit={HandleSubmit}>

                            <div className="messages"></div>

                            <div className="controls two-columns">
                                <div className="fields clearfix">
                                    <div className="left-column">
                                        <div className="form-group form-group-with-icon">
                                            <input id="form_name" type="text" name="name" className="form-control" placeholder="Full Name" required="required" data-error="Name is required." value={formValues.name} onChange={handleChange}/>
                                            <div className="form-control-border"></div>
                                            <div className="help-block with-errors">{formErrors.name}</div>
                                        </div>

                                        <div className="form-group form-group-with-icon">
                                            <input id="form_email" type="email" name="email" className="form-control" placeholder="Email Address" required="required" data-error="Valid email is required." value={formValues.email} onChange={handleChange} />
                                            <div className="form-control-border"></div>
                                            <div className="help-block with-errors">{formErrors.email}</div>
                                        </div>

                                        <div className="form-group form-group-with-icon">
                                            <input id="form_name" type="text" name="subject" className="form-control" placeholder="Subject" required="required" data-error="Subject is required." value={formValues.subject} onChange={handleChange}/>
                                            <div className="form-control-border"></div>
                                            <div className="help-block with-errors">{formErrors.subject}</div>
                                        </div>
                                    </div>
                                    <div className="right-column">
                                        <div className="form-group form-group-with-icon">
                                            <textarea id="form_message" name="message" className="form-control" placeholder="Message" rows="7" required="required" data-error="Please, leave me a message." value={formValues.message} onChange={handleChange}></textarea>
                                            <div className="form-control-border"></div>
                                            <div className="help-block with-errors">{formErrors.message}</div>
                                        </div>
                                    </div>
                                </div>

                                <GooglereCAPTCHA sitekey={sitekey} />

                                <input type="submit" className="button btn-send" value="Send message" />
                            </div>
                        </form>

                        <div className="success-msg" id="success-block">
                            <p>Thank you for connecting, I will get back you shortly </p>
                        </div>
                        <div className="failure-msg" id="failure-block">
                            <p>Error while submit the form, please try again</p>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default Contact