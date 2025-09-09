import React from 'react';
import './SocialLink.css';

const SocialLink = ({ links }) => {
    return (
        <div className="social-links">
            {links.map ((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {link.name}
                </a>
            ))}
        </div>
    );
};

export default SocialLink;