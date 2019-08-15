import React from 'react';

export default function() {
    return (
      <div className="content-page-wrapper">
        <div className="left-column" 
          style={{
//            background: "url(" + contactPicture + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="right-column">
          <div className="contact-bullet-points">
            <div className="bullet-point-group">
              <div className="icon">
                <p>Phone:</p>
              </div>
  
              <div className="text">602-708-7545</div>
            </div>
  
            <div className="bullet-point-group">
              <div className="icon">
                <p>Email:</p>
              </div>
  
              <div className="text">ashley.ferguson1218@gmail.com</div>
            </div>
  
            <div className="bullet-point-group">
              <div className="icon">
                <p>Location:</p>
              </div>
  
              <div className="text">Peoria, AZ</div>
            </div>
          </div>
        </div>
      </div>
    );
  }