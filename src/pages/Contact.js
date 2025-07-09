import React from 'react';

function Contact() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Contact Us</h2>

      <form className="mx-auto" style={{ maxWidth: '600px' }}>
        {/* Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
        </div>

        {/* Mobile */}
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">Mobile Number</label>
          <input type="tel" className="form-control" id="mobile" placeholder="Enter your mobile number" required />
        </div>

        <button type="submit" className="btn btn-success w-100">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
