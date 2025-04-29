import React from 'react';
import './css/learn.css';

function Learn() {
  return (
    <div className="learn-container">
      
      <section className="learn-hero" data-aos="fade-up">
        <h1 className="learn-heading">Start Your Learning Journey</h1>
        <p className="learn-subtext">
          Dive deep into <span>Cybersecurity</span>, <span>Programming</span>, <span>Ethical Hacking</span>, <span>Web Development</span>, and <span>Tool Development</span>.
        </p>
      </section>

      <section className="learn-categories" data-aos="fade-right">
        <h2>Choose Your Path</h2>
        <div className="categories-grid">

          {/* Cybersecurity card */}
          <a 
            href="https://www.youtube.com/@CodingChatRoom" 
            className="category-card" 
            data-aos="zoom-in" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <h3>Cybersecurity</h3>
            <p>Protect systems, networks, and programs from digital attacks.</p>
          </a>

          {/* Programming card */}
          <a 
            href="https://www.youtube.com/@CodingChatRoom/playlists" 
            className="category-card" 
            data-aos="zoom-in" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <h3>Programming</h3>
            <p>Master coding skills for real-world software development.</p>
          </a>

          {/* Ethical Hacking card */}
          <a 
            href="https://youtube.com/playlist?list=PL-Y4YkNs_EJHZxzuxzhishpc6XygJf4Um&si=OerbWqalpY9C_qB3" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="category-card" 
            data-aos="zoom-in"
          >
            <h3>Ethical Hacking</h3>
            <p>Learn Hacking by watching Live Attacks practically with real world senarioes.</p>
          </a>

          {/* Web Development card */}
          <a 
            href="https://www.youtube.com/@CodingChatRoom" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="category-card" 
            data-aos="zoom-in"
          >
            <h3>Web Development</h3>
            <p>Learn HTML, CSS, JavaScript, PHP, and more to build beautiful websites.</p>
          </a>

          {/* Tool Development card */}
          <a 
            href="https://www.youtube.com/@CodingChatRoom" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="category-card" 
            data-aos="zoom-in"
          >
            <h3>Tool Development</h3>
            <p>Create cybersecurity, automation, and custom development tools.</p>
          </a>

        </div>
      </section>

      <section className="learn-cta" data-aos="fade-up">
        <h2>Ready to Begin?</h2>
        <p>Pick a topic, start exploring, and grow your skills with <span>Coding Chat Room</span>.</p>
        <a 
          href="https://www.youtube.com/@CodingChatRoom" 
          className="start-learning-button" 
          data-aos="zoom-in" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Start Learning
        </a>
      </section>

      <section className="about-channel" data-aos="fade-up">
        <h2>About My Channel</h2>
        <p className="about-description">
          <a 
            href="https://www.youtube.com/@CodingChatRoom" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="link"
          >
            Coding Chat Room 
          </a> is a free platform to learn <span>Web Development</span>, <span>Ethical Hacking</span>, <span>Tool Development</span>, and many exciting tech skills. Join us and transform your future!
        </p>
      </section>

    </div>
  );
}

export default Learn;
