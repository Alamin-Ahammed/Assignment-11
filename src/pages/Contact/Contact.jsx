import './Contact.css'

export default function Contact() {
  return (
    <div className="contact-container">
      <h2 className="title">Contact Us</h2>
      <p className="paragraph">
        Have questions or feedback? Reach out to us using the contact form
        below.
      </p>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
