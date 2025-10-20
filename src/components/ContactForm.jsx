import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm(){
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID', formRef.current, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        setStatus('success');
        formRef.current.reset();
      }, (error) => {
        console.log(error.text);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="grid grid-2" style={{alignItems:'center'}}>
          <div>
            <h3 className="h-title">Contact Us</h3>
            <p className="lead">Ready to start? Send us a message and we’ll give you a free project assessment.</p>

            <form ref={formRef} onSubmit={sendEmail} style={{marginTop:20}} className="card">
              <div style={{display:'grid', gap:12}}>
                <input name="user_name" type="text" placeholder="Full name" required style={inputStyle} />
                <input name="user_email" type="email" placeholder="Email address" required style={inputStyle} />
                <input name="user_phone" type="tel" placeholder="Phone (optional)" style={inputStyle} />
                <textarea name="message" placeholder="Tell us about your project" rows="5" style={{...inputStyle, resize:'vertical'}} required></textarea>

                <div style={{display:'flex', gap:12}}>
                  <button type="submit" className="btn btn-primary">
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                  <button type="button" className="btn btn-ghost" onClick={() => { formRef.current.reset(); setStatus(null); }}>
                    Reset
                  </button>
                </div>

                {status === 'success' && <div style={{color:'var(--success)'}}>Message sent — we'll reply within 24 hours.</div>}
                {status === 'error' && <div style={{color:'#ea4335'}}>There was an error sending your message. Try again later.</div>}
              </div>
            </form>
          </div>

          <div>
            <div className="card">
              <h4>Other ways to reach us</h4>
              <p style={{color:'var(--muted)'}}>Email: <a href="mailto:info@projtrust.com">info@projtrust.com</a></p>
              <p style={{color:'var(--muted)'}}>WhatsApp: <a href="https://wa.me/234XXXXXXXXXX" target="_blank" rel="noreferrer">Chat us</a></p>
              <div style={{marginTop:12}}>
                <h5 style={{marginBottom:8}}>Follow us</h5>
                <div style={{display:'flex', gap:8}}>
                  <a href="#" aria-label="LinkedIn">LinkedIn</a>
                  <a href="#" aria-label="Instagram">Instagram</a>
                  <a href="#" aria-label="Facebook">Facebook</a>
                </div>
              </div>
            </div>

            <div style={{height:20}}></div>

            <div className="card">
              <h5 style={{margin:0}}>Free Project Checklist</h5>
              <p style={{color:'var(--muted)', marginTop:8}}>Download our assessment checklist to prepare for a consultation.</p>
              <button className="btn btn-ghost" style={{marginTop:10}}>Download PDF</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  padding:12,
  borderRadius:8,
  border:'1px solid rgba(10,37,64,0.08)',
  outline:'none',
  fontSize:14,
  background:'#fff'
};
