import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    if (!name) {
      setErrorMessage('Please provide a name.');
      return;
    }
    if (!message) {
      setErrorMessage('Please type a message.');
      return;
    }
    alert(`Thank you ${name} for your interest in contacting me. I look forward to speaking with you soon.`);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <p>Hi {name}!</p>
      <form className="form">
        <input
        value={name}
        name="name"
        onChange={handleInputChange}
        type="name"
        placeholder="name"
        />
        <input
          value={email}
          name='email'
          onChange={handleInputChange}
          type='email'
          placeholder='email'
        />
        <input
          value={message}
          name='message'
          onChange={handleInputChange}
          type='message'
          placeholder='message'
        />
        <button type='button' onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className='error-text'>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;