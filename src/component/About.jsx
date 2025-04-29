import React from 'react'
import './css/about.css'

function About() {
  return (
     <div className="about-container">
      <h1 className="about-title">About Coding Chat Room</h1>
      <p className="about-description">
  Welcome to <span className="highlight">
    <a href="https://www.youtube.com/@CodingChatRoom" target="_blank" rel="noopener noreferrer" className="link">
      Coding Chat Room
    </a>
  </span> — a community built for passionate 
  <span className="highlight"> Hackers</span> and 
  <span className="highlight"> Learners</span> who are eager to explore the world of cybersecurity, programming, and hacking techniques.
</p>


      <div className="about-section">
  <h2>About Me</h2>
  <p className="about-description">
    I'm <span>Saqlain</span>, a passionate developer, teacher, and ethical hacker. Through my YouTube channel 
    <span className="highlight">
      <a href="https://www.youtube.com/@CodingChatRoom" target="_blank" rel="noopener noreferrer" className="link">
        Coding Chat Room
      </a>
    </span>, 
    I share knowledge about tool development, MERN stack web development, and ethical hacking techniques.
    My mission is to empower learners and hackers with skills that can make a real difference.
  </p>

  <h2>About My YouTube Channel</h2>
  <p className="about-description">
    On my YouTube channel 
    <span className="highlight">
      <a href="https://www.youtube.com/@CodingChatRoom" target="_blank" rel="noopener noreferrer" className="link">
        Coding Chat Room
      </a>
    </span>, 
    you will find complete tutorials on tool creation, real-world MERN (MongoDB, Express.js, React.js, Node.js) development projects, 
    and ethical hacking guides. Whether you're a beginner or advanced learner, my videos are designed to help you master both development and cybersecurity skills.
  </p>
</div>


      <h2 className="about-subtitle">Our Mission</h2>
      <p className="about-text">
        Our mission is to provide the best resources, tutorials, and tools for individuals who want to sharpen their skills 
        in ethical hacking and software development. Whether you are a beginner or an expert, 
        you’ll always find something valuable here.
      </p>

      <h2 className="about-subtitle">What Makes Us Different?</h2>
      <ul className="about-list">
        <li>Real-world hacking tools and techniques.</li>
        <li>Step-by-step programming guides and challenges.</li>
        <li>A supportive community of learners and experts.</li>
        <li>Focus on both learning and ethical practices.</li>
      </ul>

      <p className="about-closing">
        Join us and become part of a powerful movement towards mastering cybersecurity and coding. 
        Let's learn, build, and secure the digital world together!
      </p>

      <div className="about-button-container">
  <a 
    href="https://www.youtube.com/@CodingChatRoom" 
    target="_blank" 
    rel="noopener noreferrer"
    className="about-button"
  >
    Visit My YouTube Channel
  </a>
</div>

    </div>
  )
}

export default About
