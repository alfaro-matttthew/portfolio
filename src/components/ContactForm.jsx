import React, { useState } from 'react';
import ButtonPill from './ButtonPill';

export default function ContactForm({ onSubmit }) {

      const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        businessName: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleBlur = (e) => {
        const label = e.target.previousElementSibling;
    
        const setup = {
          input1: {
            defaultMessage: "What's your first name?",
            errorMessage: " (First name must be filled out)"
          },
          input2: {
            defaultMessage: "Now how about your last name",
            errorMessage: " (Last name must be filled out)"
          },
          input4: {
            defaultMessage: "How can I get in contact with you?",
            errorMessage: " (Email must be filled out)"
          },
          input5: {
            defaultMessage: "What do you want to talk about?",
            errorMessage: " (A message must be filled out)"
          }
        };

        if(e.target.value == '' && label.textContent == setup[label.id].defaultMessage + setup[label.id].errorMessage) {
            label.style.color = 'crimson';
          } else if (e.target.value == '') {
            label.style.color = 'crimson';
            label.append(setup[label.id].errorMessage);
          } else {
            label.textContent = setup[label.id].defaultMessage;
            label.style.color = 'black';
          }
        };

        const handleSubmit = (e) => {
            e.preventDefault();

            onSubmit({ firstName, lastName, businessName, email, message })
        }

        return (
<div>


          {/* <form onSubmit={handleSubmit} name='contact' action='/contacts' method='post'> */}
            {/* <input type='hidden' name='form-name' value='contact' /> */}
            {/* <input required type='text' name='firstName' placeholder='first name' /> */}
            {/* <input required type='text' name='lastName' placeholder='last Name' /> */}
            {/* <input required type='text' name='businessName' placeholder='business Name' /> */}
            {/* <input required type='email' name='email' placeholder='Your Email' /> */}
            {/* <textarea required  name='message' placeholder='message' cols='30' rows='10' ></textarea> */}
            {/* <button type='submit'>Send a Message</button> */}
          {/* </form> */}

          <form /*onSubmit={handleSubmit}*/ name='contact' action='/contacts' method='post'>

            <input type='hidden' name='form-name' value='contact' />

                <div className="mb-5 pb-1 border-bottom border-secondary">
                    <label id="input1" htmlFor="firstName" className="body-font form-label">
                        What's your first name?
                    </label>
                    <input
                      type="text"
                      className="px-0 border-0 bg-transparent form-control"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      placeholder='Type your first name'
                    />
                </div>

                <div className="mb-5 pb-1 border-bottom border-secondary ">
                    <label id="input2" htmlFor="lastName" className="body-font form-label">
                        Now how about your last name
                    </label>
                    <input
                      type="text"
                      className="px-0 border-0 bg-transparent form-control"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      placeholder='Type your last name'
                    />
                </div>

                <div className="mb-5 pb-1 border-bottom border-secondary ">
                    <label id="input3" htmlFor="businessName" className="body-font form-label">
                        Are you affiliated with a business?
                    </label>
                    <input
                      type="text"
                      className="px-0 border-0 bg-transparent form-control"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder='Type your busines name'
                    />
                </div>

                <div className="mb-5 pb-1 border-bottom border-secondary">
                    <label id="input4" htmlFor="email" className="body-font form-label">
                        How can I get in contact with you?
                    </label>
                    <input
                      type="email"
                      className="px-0 border-0 bg-transparent form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      placeholder='Type your email address'
                    />
                </div>

                <div className="pb-1 border-bottom border-secondary">
                    <label id="input5" htmlFor="message" className="body-font form-label">
                        What do you want to talk about?
                    </label>
                    <textarea
                      className="px-0 border-0 bg-transparent body-font form-control"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      rows="4"
                      placeholder='Write out your message here'
                    />
                </div>
                  <button type='submit'>Submit</button>
             </form>
  </div>
        )
}