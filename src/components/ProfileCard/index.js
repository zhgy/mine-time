import React from 'react'
import './style.css'
import { Button, Label } from '../'


/* Copied from https://www.spotify.com/ */
const ProfileCard = ({ tag, name, description, avatar, action }) =>
    (<div className='ProfileCard-container'>
        <div id="profile-artist" className=''>
            <figure className='item-art'>
                <img className='media-object' src={avatar} alt={name} />
            </figure>
            <figcaption className='item-details'>
                <Label className='item-details-tag'>{tag}</Label>
                <Label className='item-details-name'>{name}</Label>
                <div style={{ padding: '10px 42px' }}>
                    {action ? <Button {...action} /> : null}
                    {description ? <p className='item-details-desc'>{description}</p> : null}
                </div>
            </figcaption>
            <div className='item-bg'></div>
        </div>
    </div>)

export { ProfileCard }