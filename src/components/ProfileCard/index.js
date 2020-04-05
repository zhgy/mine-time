import React from 'react'
import './style.css'
import { Button, Label } from '../'


/* Copied from https://www.spotify.com/ */
export const ProfileCard = ({ tag, name, description, cover, avatar, action }) => { 
    const bgStyle = {
        background: `url(${cover}) center no-repeat`,
        backgroundSize: 'cover',
    };
    return (<div className='tl-profile' style={bgStyle}>
        <div className='tl-profile-bg'>
            <figure>
                {avatar ? <img className='media-object' src={avatar} alt={name} /> : null}
            </figure>
            <div className='tl-profile-details'>
                <div className='tl-profile-tag'>
                    <Label>{tag}</Label>
                </div>
                <div className='tl-profile-title'>
                    <Label>{name}</Label>
                </div>
                <div className='tl-profile-action'>
                    {action ? <Button {...action} /> : null}
                </div>
                <div className='tl-profile-description'>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </div>);
};
