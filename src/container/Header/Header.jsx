import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';


import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">
        The Key to Fine Dining
      </h1>
      <p className="p__opensans" style={{margin: '2rem 0rem'}}>
      Welcome to our salad sanctuary, where each plate is a masterpiece of nature's bounty. Step into a world where health and indulgence harmoniously coexist, and let your taste buds dance with delight as you savor the symphony of tastes that our salads offer.
      </p>
      <button className="custom__button" type='button'>Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.salad_head} alt="welcome" />
    </div>
  </div>
);

export default Header;
