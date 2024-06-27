import React from 'react';
import './Test.scss';
import Nav from '../../Components/Nav/Nav';

const Test: React.FC = () => {
  return (
    <>
      <Nav active="test" />
      <div className="form-container page-container">
      <form id="complete-form">
        <div className="form-header">
          <h2>Complete Form with All Input Types</h2>
          
          <a
              href="https://chromewebstore.google.com/detail/autofilly/kipeljdmmfapdfmklhibgedbgppgaeom"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Add to Chrome
            </a>
        </div>
        <div className="form-row">
          <div className="form-column">
            <label htmlFor="text-input">Text Input</label>
            <input type="text" id="text-input" name="text-input" placeholder="Text input" />

            <label htmlFor="password-input">Password Input</label>
            <input type="password" id="password-input" name="password-input" placeholder="Password input" />

            <label htmlFor="email-input">Email Input</label>
            <input type="email" id="email-input" name="email-input" placeholder="Email input" />

            <label htmlFor="number-input">Number Input</label>
            <input type="number" id="number-input" name="number-input" placeholder="Number input" />

            <label htmlFor="tel-input">Telephone Input</label>
            <input type="tel" id="tel-input" name="tel-input" placeholder="Telephone input" />

            <label htmlFor="url-input">URL Input</label>
            <input type="url" id="url-input" name="url-input" placeholder="URL input" />

            <label htmlFor="date-input">Date Input</label>
            <input type="date" id="date-input" name="date-input" />

            <label htmlFor="time-input">Time Input</label>
            <input type="time" id="time-input" name="time-input" />

            <label htmlFor="textarea-input">Textarea</label>
            <textarea id="textarea-input" name="textarea-input" rows={4} placeholder="Textarea input"></textarea>
          </div>

          <div className="form-column">
            <label htmlFor="datetime-local-input">Datetime Local Input</label>
            <input type="datetime-local" id="datetime-local-input" name="datetime-local-input" />

            <label htmlFor="month-input">Month Input</label>
            <input type="month" id="month-input" name="month-input" />

            <label htmlFor="week-input">Week Input</label>
            <input type="week" id="week-input" name="week-input" />

            <label htmlFor="color-input">Color Input</label>
            <input type="color" id="color-input" name="color-input" value="#000000" />

            <fieldset>
              <legend>Radio Inputs</legend>
              <div className="group-container">
                <label>
                  <input type="radio" name="radio-group" value="option1" /> Option 1
                </label>
                <label>
                  <input type="radio" name="radio-group" value="option2" /> Option 2
                </label>
                <label>
                  <input type="radio" name="radio-group" value="option3" /> Option 3
                </label>
              </div>
            </fieldset>

            <fieldset>
              <legend>Checkbox Inputs</legend>
              <div className="group-container">
                <label>
                  <input type="checkbox" name="checkbox-group" value="checkbox1" /> Checkbox 1
                </label>
                <label>
                  <input type="checkbox" name="checkbox-group" value="checkbox2" /> Checkbox 2
                </label>
                <label>
                  <input type="checkbox" name="checkbox-group" value="checkbox3" /> Checkbox 3
                </label>
              </div>
            </fieldset>

            <label htmlFor="select-input">Select Input</label>
            <select id="select-input" name="select-input">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>

            <label htmlFor="file-input">File Input (Under Development)</label>
            <input type="file" id="file-input" name="file-input" />
          </div>
        </div>
      </form>
    </div>
  </>
  );
};

export default Test;
