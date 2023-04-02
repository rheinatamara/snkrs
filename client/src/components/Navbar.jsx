import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div id="navbar">
                <div class="navbar-wrapper">
                    <div className="logo">
                        <p>snkrs</p>
                    </div>
                    <div className="mid-navbar">
                        <ul>
                            <li><p>Women</p></li>
                            <li><p>Men</p></li>
                            <li><p>Kids</p></li>
                            <li><p>Collections</p></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}

export default Navbar;
