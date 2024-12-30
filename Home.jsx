import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h2>Welcome to Our Company</h2>
        <p>This is the home page content.</p>
      </div>
      <div className="home-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeevmssBJPR2VMWkoPLp8WxonDpmzaszNIqw&s.jpg" alt="Home" />
      </div>
    </div>
  );
};

export default Home;
