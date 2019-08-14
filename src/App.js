import React from 'react';
import './app.css'

function App() {
    return (
        <Root>
            <header className="header">
                <h1 className="header-title">Ferguson Capstone</h1>
                <nav className="header-nav">
                <link>Home</link>
                <link>About</link>
                <link>Contact Me</link>
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