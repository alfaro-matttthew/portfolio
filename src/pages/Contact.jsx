import React, { useState } from 'react';

export default function Contact() {

  const background = {
    backgroundColor: '#FBFCFA'
  }

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, e.g., send the data to a server or perform validation.
    // For now, we'll just log the form data.
    console.log(formData);
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
    // console.log(formData.firstName);

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

  return (
    <div>
      <div className=' w-50 mb-4 d-flex justify-content-center'>
        <div>
          <span className=' font-serif fs-5'>what are you waiting for?</span>
          <h2 className=' font-san-serif title lh-1 text-uppercase'>Let's Get<br/>Started</h2>
        </div>
      </div>
      <div className='row'>
        <div className="min-vh-100 w-50 container">
          <form 
           onSubmit={handleSubmit}
           name='contact'
           method='post'
           data-netlify='true'
          >

            {/* fname */}
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
            {/* lname */}
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
            {/* business name */}
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
            {/* email */}
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
            {/* message */}
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

            <button type="submit" className="mt-5 px-5 py-2 font-san-serif fw-normal text-uppercase text-decoration-none wide-tracking border border-2 border-dark rounded-pill bg-transparent">

              Submit
            </button>
          </form>
        </div>
        <div className='w-25 d-flex flex-column align-items-start'>
          <h3 className='mb-4 py-1 px-4 black-bg body-font-w text-uppercase'>find me here too</h3>
          <ul>
            <li className='mb-2 list-unstyled d-flex align-items-center'>
              <img className='me-1' src='/svg/icons8-gmail-logo.svg'></img>
              <a className=' text-decoration-none body-font'>matthewealfaro@gmail.com</a>
            </li>
          </ul>
          <ul>
            <li className='mb-2 list-unstyled d-flex align-items-center'>
              <img className='me-1' src='/svg/icons8-github-25.svg'></img>
              <a 
                className=' text-decoration-none body-font'
                href='https://github.com/alfaro-matttthew'
                target='_blank'
              >
                GitHub
              </a>
            </li>
            <li className='mb-2 list-unstyled d-flex align-items-center'>
              <img className='me-1' src='/svg/icons8-linkedin-25.svg'></img>
              <a 
                className=' text-decoration-none body-font'
                href='https://www.linkedin.com/in/alfaro-matthew/'
                target='_blank'
              >
                LinkedIn
              </a>
            </li>
          </ul>
          <ul>
            <li className='mb-2 list-unstyled d-flex align-items-center'>
              <img className='me-1' src='/svg/icons8-behance-25.svg'></img>
              <a 
                className=' text-decoration-none body-font'
                href='https://www.behance.net/matthewalfaro2'
                target='_blank'
              >
                Behance
              </a>
            </li>
            <li className='mb-2 list-unstyled d-flex align-items-center'>
              <img className='me-1' src='/svg/icons8-dribbble-25.svg'></img>
              <a 
                className=' text-decoration-none body-font'
                href='https://dribbble.com/alfaro-matthew'
                target='_blank'
              >
                Dribble
              </a>
            </li>
          </ul>
        </div>
      </div>  
    </div>
  );
}
