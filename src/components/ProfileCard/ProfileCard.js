import React from 'react';
import './ProfileCard.css';
import avatar from '../../assets/images/avatar-jessica.jpeg';
import SocialLink from '../SocialLink/SocialLink';

const ProfileCard = ({ userData }) => {
    return (
        <div className="profile-card">
            <img
                src={avatar}
                alt="Avatar"
                className="profile-card__avatar"
            />
            <div className="profile-card__info">
                <h1 className="profile-card__name">{userData.name}</h1>
                <p className="profile-card__location">{userData.location}</p>
            </div>
            <div className="profile-card__bio">
                <p className="profile-card__desc">{userData.bio}</p>
            </div>

            <SocialLink links={userData.socialLinks} />
        </div>
    );
};

export default ProfileCard;