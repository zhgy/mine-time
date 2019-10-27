import React from 'react'
import './style.css'
import { Button } from '../Button'


/* Copied from https://www.spotify.com/ */
const ProfileCard = ({ tag, name, avatar, action }) =>
    (<div className='ProfileCard-container'>
        <div id="profile-artist" className=''>
            <figure className='item-art'>
                <img className='media-object' src={avatar} alt={name} />
            </figure>
            <figcaption className='item-details'>
                <small className=''>{tag}</small>
                <h3 className=''>{name}</h3>
                <div style={{ padding: '10px 42px' }}>
                    {action ? <Button {...action} /> : null}
                </div>
            </figcaption>
            <div className='item-bg'></div>
        </div>
    </div>)

export { ProfileCard }