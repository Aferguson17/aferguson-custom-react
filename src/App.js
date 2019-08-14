import React from 'react';
import { Root,  } from 'react-static'

function App() {
    return (
        <Root>
            <header className="header">
                <h1 className="header-title">Ferguson Capstone</h1>
                <nav className="header-nav">
                <text>Home</text>
                <text>About</text>
                <text>Contact Me</text>
                </nav>
            </header>

            <div className="blog-content">
             <p>Placeholder Text</p>
            </div>

            <div className="footer">
            <span>Created by Ashley Ferguson 2019</span>
            </div>
        </Root>
    )
}

export default App