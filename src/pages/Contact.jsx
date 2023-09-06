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
          <form onSubmit={handleSubmit}>
            {/* fname */}
            <div className="mb-5 pb-1 border-bottom border-secondary">
              <label htmlFor="firstName" className="body-font form-label">
                What's your first name?
              </label>
              <input
                type="text"
                className="px-0 border-0 bg-transparent form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder='Type your first name'
              />
            </div>
            {/* lname */}
            <div className="mb-5 pb-1 border-bottom border-secondary ">
              <label htmlFor="lastName" className="body-font form-label">
                Now how about your last name
              </label>
              <input
                type="text"
                className="px-0 border-0 bg-transparent form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder='Type your last name'
              />
            </div>
            {/* business name */}
            <div className="mb-5 pb-1 border-bottom border-secondary ">
              <label htmlFor="businessName" className="body-font form-label">
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
              <label htmlFor="email" className="body-font form-label">
                How can I get in contact with you?
              </label>
              <input
                type="email"
                className="px-0 border-0 bg-transparent form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='Type your email address'
              />
            </div>
            {/* message */}
            <div className="pb-1 border-bottom border-secondary">
              <label htmlFor="message" className="body-font form-label">
                What do you want to talk about?
              </label>
              <textarea
                className="px-0 border-0 bg-transparent body-font form-control"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
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
        <div className='w-25'>
          <h3 className='font-san-serif text-uppercase'>find me here too</h3>
        </div>
      </div>  
    </div>
  );
}
