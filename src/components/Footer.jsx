import React from 'react';
import './css/footer.css';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <h2>GoodwillGuru

</h2>
              <p>Receive updates in your inbox every month</p>
              <div className="input flex">
                <input type="text" placeholder="Email Address" />
                <div className="created-by">
               
               
                  <div className="social-media">
                    <a href="https://github.com/ninambash" target="_blank" rel="noopener noreferrer">github</a>
                    <a href="https://www.linkedin.com/in/ninambarack-dev/" target="_blank" rel="noopener noreferrer">linkedin</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="legal">
        <span>© ninambarack 2023</span>
      </div>
    </>
  );
};

export default Footer;

