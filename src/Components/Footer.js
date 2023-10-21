import React from 'react';
import './Footer.css';
import Contact from './Contact';

function Footer() {
  return (
    <section id="contact" class="contact__StyledContactSection-sc-1m8df4t-0 eXnPVF" >
      <h2 class="numbered-heading overline">Whats Next?</h2>
      <h2 class="title">Get In Touch</h2>
      <p>Although I am not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I will try my best to get back to you!</p>
      {/* <a class="email-link" href="mailto:brittany.chiang@gmail.com">Say Hello</a> */}
      <div class="form_contactme">
        <Contact />
      </div>
      <div class="footer rater">
        <footer class="footer__StyledFooter-sc-4jwnt4-0 earxGk">
          <div class="footer__StyledSocialLinks-sc-4jwnt4-1 iKeBGp">
            <ul>
              <li><a href="https://github.com/tusharkaran" aria-label="GitHub" rel="noopener noreferrer" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-github">
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li><li><a href="https://www.instagram.com/tusharkaran99/" aria-label="Instagram" rel="noopener noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-instagram">
                    <title>Instagram</title>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    </a></li>
                    <li><a href="https://www.linkedin.com/in/developer-tushar-karan/" aria-label="Linkedin" rel="noopener noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-linkedin"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a></li></ul></div></footer>

      </div>
    </section>


  );
}

export default Footer;