import React, { useState } from 'react';
import ContactForm from '.././components/ContactForm';
import FormSuccess from '.././components/FormSuccess';


export default function Contact() {

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // const [formData, setFormData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   businessName: '',
  //   email: '',
  //   message: '',
  // });

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

  const handleFormSubmit = (data) => {
    // Add a one-second (1000 milliseconds) delay before proceeding
    setTimeout(() => {
      // Save form data if needed
      setFormData(data);
      // Set the state to indicate that the form has been submitted
      setIsFormSubmitted(true);
    }, 1000); // 1000 milliseconds = 1 second
  };

  const handleReset = () => {
    // Reset the form data and set isFormSubmitted back to false
    setFormData({});
    setIsFormSubmitted(false);
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

          {isFormSubmitted ? (
            <FormSuccess name={formData.firstName} onReset={handleReset} />
          ) : (
            <ContactForm onSubmit={handleFormSubmit} />
          )}

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
