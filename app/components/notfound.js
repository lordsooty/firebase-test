import React from 'react';
import { Link } from 'react-router';

const NotFound = () => (
    <div className="navbar-offset">
        <div className="container-sm text-center pad-jumbo">
            <h1 className="h1 jumbo">Where did that go?</h1>
            <p>We're having trouble finding the page you're after.</p>
            <p>If you keep experiencing issues, please contact us at <a href="mailto:support@insurance4that.com.au">support@insurance4that.com.au</a></p>
            <Link to="/" className="btn m-t-2">Return home</Link>
        </div>
    </div>
);

export default NotFound;
