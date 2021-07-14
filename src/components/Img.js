import * as React from 'react';

const Footer = () => {
    return (
        <div className="gallery-item" tabIndex={0}>
            <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="gallery-image" alt="" />
            <div className="txt-post">
                <p>Nom du post</p>
            </div>
        </div>
    );
};

export default Footer;
