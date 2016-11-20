import React, { Component } from 'react';
import DemoImage from '../assets/images/apple-touch-icon.png';
import PolicySearch from './search/policySearch';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Bob' };
        this.handleInput = this.handleInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        // Do something when loaded
    }

    handleInput(e) {
        this.setState({ name: e.target.value });
    }

    handleSearch(e) {
        e.preventDefault();
        // Do something with form data in state
    }

    render() {
        const { name } = this.state;

        return (
            <div className="navbar-offset text-center">
                <PolicySearch />
            </div>
        );
    }
}

export default Home;
