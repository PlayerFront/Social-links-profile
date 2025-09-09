import React from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard';

function App() {

  const userData = {
    name: "Jessica Randall",
    location: "London, United Kingdom",
    bio: "'Front-end developer and avid reader.'",
    socialLinks: [
      {name: "GitHub", url: "https://github.com"},
      {name: "Frontend Mentor", url: "https://frontendmentor.io" },
      {name: "LinkedIn", url: "https://linkedin.com"},
      {name: "Twitter", url: "https://twitter.com"},
      {name: "Instagram", url: "https://instagram.com"}
    ]
  };


  return (
    <div className="App">
      <ProfileCard userData={userData}/>
    </div>
  );
}

export default App;
