import React from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static'

import { Link, Router } from './Router'
import Dynamic from 'containers/Dynamic'

addPrefetchExcludes(['dynamic'])

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
            <React.Suspense fallback={<em>Loading...</em>}>
                <Router>
                    <Dynamic path="dynamic" />
                    <Routes path="*" />
                </Router>
            </React.Suspense>    
        </div>

            <div className="footer">
            <span>Created by Ashley Ferguson 2019</span>
            </div>
        </Root>
    )
}

export default App