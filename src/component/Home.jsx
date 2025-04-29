import './css/home.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="home-container">
      <section className="hero-section" data-aos="fade-up">
        <h1 className="hero-heading">Welcome to the Coding Chat Room</h1>
        <p className="hero-subtext">
          This is a page for hackers to learn about <span>Tools</span> and some{' '}
          <span>Techniques</span>
        </p>
      </section>

      <section className="about-section" data-aos="fade-right">
        <h2>About Us</h2>
        <p>
          We are a community of <span>Hackers</span> and <span>Learners</span> sharing
          knowledge and experience.
        </p>
      </section>

      <section className="topics-section" data-aos="fade-left">
        <h2>What You'll Learn</h2>
        <div className="topics-grid">
          <Link to="/data/tools" className="topic-card" data-aos="zoom-in">
            <h3>Tools</h3>
            <p>Learn about various cybersecurity and hacking tools.</p>
          </Link>

          <Link to="/data/techniques" className="topic-card" data-aos="zoom-in">
            <h3>Techniques</h3>
            <p>Explore penetration testing techniques and security practices.</p>
          </Link>

          <Link to="/data/programming" className="topic-card" data-aos="zoom-in">
            <h3>Programming</h3>
            <p>Enhance your coding skills for building and breaking software.</p>
          </Link>
        </div>
      </section>

         <br /><br />
         
      <section className="join-section" data-aos="fade-up">
        <h2>Join Us Today</h2>
        <p>Become a part of the growing <span><a href="https://www.youtube.com/@CodingChatRoom" target="_blank" rel="noopener noreferrer" className="link">
      Coding Chat Room
    </a></span> community.</p>
     <a 
    href="https://www.youtube.com/@CodingChatRoom" 
    target="_blank" 
    rel="noopener noreferrer" >
    <button className="join-button">Get Started</button>
  </a>
      </section>
    </div>
  );
}

export default Home;
