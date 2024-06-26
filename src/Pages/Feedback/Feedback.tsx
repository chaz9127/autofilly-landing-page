import React, { useState } from 'react';
import './Feedback.scss';

const Feedback: React.FC = () => {
  const [replyEmail, setReplyEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your fetch post request here
    console.log('Submitted:', { replyEmail, message });
  };

  return (
    <div className="feedback-container">
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label htmlFor="replyEmail">Your Email:</label>
          <input
            type="email"
            id="replyEmail"
            value={replyEmail}
            onChange={(e) => setReplyEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-submit">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;
