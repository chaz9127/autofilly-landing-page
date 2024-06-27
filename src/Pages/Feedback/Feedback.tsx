import React, { useState } from 'react';
import Nav from '../../Components/Nav/Nav';
import './Feedback.scss';

const Feedback: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: 'Autofilly - Feedback',
        _template: 'box'
      }),
    }
    
    fetch('https://formsubmit.co/ajax/chasanid@gmail.com', options).then(resp => {
      return resp.json();
    }).then(() => {
      setSuccessMessage('Your feedback has been received!');
    }).catch(() => {
      setErrorMessage('There was an error sending your feedback. Try again and if it doesn\'t work you can leave a review and we will respond there.');
    }).finally(() => {
      setLoading(false);
    })
  };

  return (
    <>
      <Nav active="feedback" />
      <div className="page-container">
        <h2 className="feedback-header">Send us your feedback</h2>
        <div className="feedback-container">
          <form onSubmit={handleSubmit} className="feedback-form">
            <div className="form-group">
              <label htmlFor="name">Name (optional)</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email (optional)</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button disabled={loading} type="submit" className="btn btn-submit">{loading ? 'Sending...' : 'Send'}</button>

            <div className={`success-message notification-message ${successMessage ? 'display-notification' : ''}`}>
                <i className='bx bx-check-circle'></i>
                <span>{successMessage}</span>
            </div>
            <div className={`error-message notification-message ${errorMessage ? 'display-notification' : ''}`}>
              <i className='bx bx-x-circle'></i>
              <span>{errorMessage}</span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Feedback;
