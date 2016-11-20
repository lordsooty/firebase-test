import React, { PropTypes } from 'react';

import StylesIgnored from '../styles/main.css';
import Navbar from './navbar.js';


const Main = (props) => (
    <div>
        {/* Header */}
        <Navbar />
        {props.children}
        {/* Footer */}
    </div>
);

Main.propTypes = {
    children: PropTypes.object.isRequired
};

export default Main;
