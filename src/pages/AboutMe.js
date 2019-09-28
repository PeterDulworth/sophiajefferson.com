import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../components/Nav';
import PolaroidStrip from '../components/PolaroidStrip';
import Footer from "../components/Footer";

const AboutMe = () => {
    return (
        <div className="AboutMe">
            <Nav links={[ { label: 'About Me', href: '/' }, { label: 'Work', href: '/work'} ]} active="/" />
            <p>I'm pretty and I'm right.</p>
            <div className="AboutMe__content">
                <PolaroidStrip />
            </div>
            <Footer/>
        </div>
    );
};

AboutMe.propTypes = {

};

export default AboutMe;
