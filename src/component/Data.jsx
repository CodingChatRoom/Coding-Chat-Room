import React from 'react';
import { useParams } from 'react-router-dom';
import './css/data.css'; 

function Data() {
  const { topic } = useParams();

  const topicsData = {
    tools: {
      title: 'Cybersecurity Tools',
      description: 'Master essential tools like Nmap, Wireshark, Metasploit, and Burp Suite.',
      // image: '/images/cybersecurity-tools.jpg', 
      fullDescription: `Cybersecurity tools help professionals detect, defend, and respond to cyber threats. 
      Tools like Nmap are used for network mapping, Metasploit for exploiting vulnerabilities, 
      Wireshark for analyzing network protocols, and Burp Suite for web application security testing.`,
      links: [
        { name: 'Nmap', url: 'https://nmap.org/' },
        { name: 'Wireshark', url: 'https://www.wireshark.org/' },
        { name: 'Metasploit', url: 'https://www.metasploit.com/' },
        { name: 'Burp Suite', url: 'https://portswigger.net/burp' },
      ],
    },
    techniques: {
      title: 'Hacking Techniques',
      description: 'Explore powerful hacking techniques like SQL Injection, XSS, and social engineering.',
      // image: '/images/hacking-techniques.jpg', 
      fullDescription: `Hacking techniques exploit vulnerabilities in systems. 
      SQL Injection targets databases through input fields, 
      XSS (Cross-Site Scripting) injects malicious scripts into web apps, 
      and social engineering manipulates people into revealing confidential data.`,
      links: [
        { name: 'SQL Injection', url: 'https://owasp.org/www-community/attacks/SQL_Injection' },
        { name: 'XSS Attacks', url: 'https://owasp.org/www-community/attacks/xss/' },
        { name: 'Social Engineering', url: 'https://www.social-engineer.org/' },
      ],
    },
    programming: {
      title: 'Programming Skills',
      description: 'Learn programming languages like Python, JavaScript, C++, and PHP for cybersecurity.',
      // image: '/images/programming-skills.jpg', 
      fullDescription: `Programming skills are the backbone of cybersecurity and software development. 
      Python is ideal for automation and scripting, JavaScript powers the web, 
      C++ enables low-level system programming, and PHP builds dynamic web applications.`,
      links: [
        { name: 'Python', url: 'https://www.python.org/' },
        { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'C++', url: 'https://en.wikipedia.org/wiki/C%2B%2B' },
        { name: 'PHP', url: 'https://www.php.net/' },
        { name: 'Bash', url: 'https://www.gnu.org/software/bash/' }
      ],
    },
  };

  const data = topicsData[topic];

  if (!data) {
    
    return (
      <div className="data-container not-found">
        <h2>404 - Topic Not Found</h2>
        <p>Sorry, the topic you're looking for doesn't exist. Please check the URL!</p>
      </div>
    );
  }

  return (
    <div className="data-container">
      <h1 className="topic-title">{data.title}</h1>

      {data.image && (
        <img src={data.image} alt={data.title} className="topic-image" />
      )}

      <p className="topic-description">{data.fullDescription}</p>

      <h3 className="links-heading">Useful Resources:</h3>
      <ul className="links-list">
        {data.links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="link-item"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Data;
