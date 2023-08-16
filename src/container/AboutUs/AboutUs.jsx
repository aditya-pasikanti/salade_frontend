import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id='about'>
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="Gimage" />
    </div> */}

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">The SaladE believes in eating healthy and delicious. We use only the freshest ingredients and offer a variety of salads, wraps, bowls, and other menu items to suit every taste. We hope you'll come in and see for yourself why we're the best place in town for a healthy and delicious meal.</p>
        <button className="custom__button" type='button'>Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.S} alt="Knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">In 2010, two friends opened SaladE with a mission to make healthy eating delicious. The restaurant was an immediate success, and soon they were opening new locations all over the country. Today, SaladE is one of the most popular salad restaurants in the world. A healthy stomach is a key to healthy life.</p>
        <button className="custom__button" type='button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
