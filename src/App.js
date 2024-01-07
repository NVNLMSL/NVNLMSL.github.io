import React from 'react';
import './App.css';
import Weather from './Weather';
import Time from './Time';
import profileImage from './components/image/profile.jpg';
import cloud from './components/image/cloud.png';
import mountain from './components/image/mountain.png';

function App() {
  // Function to open your website in a new tab
  const openMyWebsite = () => {
    window.open('https://nvnlmsl.github.io/nvnlmsl1.github.io/', '_blank');
  };

  return (
    <div className="App">
      <section className="top-container">
      <img className="cloud" src={cloud} alt="cloud Image" />
        <h1> I'm Navin</h1>
        <p>Software Engineer/Web Developer</p>
        <img className="cloud" src={cloud} alt="cloud Image" /><br></br>
        <img className="mountain" src={mountain} alt="mountain Image" />
      </section>
      <section className="middle-container">
        <h2>Hello world</h2>
        <p>let's build some websites</p>
        <img className="profile-img" src={profileImage} alt="Profile Image" />
      </section>
      <section className="bottom-container">
        <h2>Skills</h2>
        <div className="skills-icons">
          {/* Add your skill icons and names here */}
          <div className="icon-container">
            <i className="fa-brands fa-css3"></i>
            <span className="icon-name">CSS3</span>
          </div>
          <div className="icon-container">
            <i className="fa-brands fa-html5"></i>
            <span className="icon-name">HTML5</span>
          </div>
          <div className="icon-container">
            <i className="fa-brands fa-js"></i>
            <span className="icon-name">JavaScript</span>
          </div>
          <div className="icon-container">
            <i className="fa-solid fa-database"></i>
            <span className="icon-name">Database</span>
          </div>
        </div>
      </section>
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-item">
            <h3>Contact Me</h3>
            navinlamsal58@gmail.com
          </div>
          <div className="footer-item">
            <h3>My Projects</h3>
            {/* Add links or information about your projects here */}
            <button className="btn btn-lrg btn-dark" onClick={openMyWebsite}>
              Surf Restaurant Website
            </button>
          </div>
        </div>
        <div className='weatherandtime' >
        <Weather />
        <Time />
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024. R&D Navin.</p>
        </div>
      </footer>
      
    </div>
  );
}

export default App;