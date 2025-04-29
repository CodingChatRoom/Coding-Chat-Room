import React from 'react'
import './css/creator.css'
import myPic from '/me.jpg'; 

function Creator() {
  return (
    <section className="creator-section">
      <div className="creator-card">
        <div className="creator-image-container">
          <img src={myPic} alt="Creator" className="creator-image" />
        </div>

        <div className="creator-text-content">
          <h1 className="creator-heading">Meet the Creator</h1>
          <p className="creator-about">
            Hello! I'm <strong className='creatorStrong'>Saqlain</strong>, founder of <strong>Coding Chat Room</strong>. 
            I'm a passionate Web Developer, Ethical Hacker, and content creator who believes in simple, powerful learning.
            Through real-world coding, I help learners unlock their full potential. 🚀
          </p>

          <h2 className="creator-subheading">🎥 About My YouTube Channel</h2>
          <p className="creator-description">
            My channel <strong className='creatorStrong'>Coding Chat Room</strong> provides coding tutorials, cybersecurity guides, projects, and more. 
            Whether you're a beginner or advanced, you'll find everything you need to grow!
          </p>
          <a 
            href="https://www.youtube.com/@CodingChatRoom" 
            className="creator-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Visit my YouTube Channel
          </a>

          <h2 className="creator-subheading">📱 Follow me on Instagram</h2>
          <p className="creator-description">
            Stay updated with new video announcements, coding tips, and direct interaction.  
            I reply personally to solve subscribers' queries on Instagram!
          </p>
          <a 
            href="https://www.instagram.com/codingchatroomofficial/" 
            className="creator-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Follow me on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default Creator
