import './Contact.css';
import { useForm } from '@formspree/react';
import { useRef } from 'react';

function Contact() {
  const [state, handleSubmit] = useForm('xvodlvkj');
  const formRef = useRef(null);
  const successMsgRef = useRef(null);

  if (state.succeeded) {
    formRef.current.reset();
    successMsgRef.current.style.display = 'block';
  }
  return (
    <div className="contact" id="contact">
      <div className="title">
        <h2>CONTACT ME</h2>
        <span className="underline">
          <span className="animation" />
        </span>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="name" className="name">
          Name
          <input type="text" placeholder="Enter your name..." name="name" required />
        </label>
        <label htmlFor="email" className="email">
          Email
          <input type="email" placeholder="Enter your email..." name="email" required />
        </label>
        <label htmlFor="subject" className="subject">
          Subject
          <input type="text" placeholder="Enter subject..." name="subject" required />
        </label>
        <label htmlFor="message" className="message">
          Message
          <textarea placeholder="Enter your message..." name="message" required />
        </label>
        <div className="success-msg" ref={successMsgRef}>
          Email successfully sent!
        </div>
        <button type="submit" className="submit-btn" disabled={state.submitting}>
          SEND MAIL
        </button>
      </form>
      <div className="line" />
      <div className="icons">
        <a href="https://twitter.com/ShahierN" target="blank" className="twitter">
          <span className="twitter-not-hovered"><i className="fab fa-twitter" /></span>
          <span className="twitter-hovered"><i className="fab fa-twitter" /></span>
        </a>
        <a href="https://www.linkedin.com/in/shahier-nashaat/" target="blank" className="linkedin">
          <span className="linkedin-not-hovered"><i className="fab fa-linkedin-in" /></span>
          <span className="linkedin-hovered"><i className="fab fa-linkedin-in" /></span>
        </a>
        <a href="https://github.com/ShahierNashaat" target="blank" className="github">
          <span className="github-not-hovered"><i className="fab fa-github" /></span>
          <span className="github-hovered"><i className="fab fa-github" /></span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
