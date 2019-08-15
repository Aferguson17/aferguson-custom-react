import React, { Component } from 'react';
import { Root } from 'react-static'
import styled from 'styles-components';

import { Link } from './Router'

const Title = styled.h1`
    color: black;
    font-size: 2.5rem;
    font-weight: 700;
`;
const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: "active" } : { className: "header-link" };
  };

function App() {
    return (
        <Root>
            <header className="header">
            
                <h1 className="header-title">Ashley Ferguson Capstone: Art Blog</h1>

                <nav className="header-nav">
                    <Link getProps={isActive} className="nav-link" to="/">Home</Link>
                    <Link getProps={isActive} className="nav-link" to="/about">About</Link>
                    <Link getProps={isActive} className="nav-link" to="/post">Post</Link>
                    <Link getProps={isActive} className="nav-link" to="/contact">Contact</Link>
                </nav>
            </header>

        <div className="blog-content">
            <p>This site is dedicated to showcasing my art as well as art that I love. </p>
        </div>

            <div className="footer">
            <span>Created by Ashley Ferguson 2019</span>
            </div>
        </Root>
    )
}

export default App