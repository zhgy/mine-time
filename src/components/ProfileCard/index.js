import React from 'react'
import './style.css'
import { Button, Label } from '../'


/* Copied from https://www.spotify.com/ */
const ProfileCard = ({ tag, name, description, avatar, action }) =>
    (<div className='tl-profile'>
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
    </div>)
// (<div className='ProfileCard-container'>
//     <div id="profile-artist" className=''>
//         <figure className='item-art'>
//             <img className='media-object' src={avatar} alt={name} />
//         </figure>
//         <figcaption className='item-details'>
//             <Label className='item-details-tag'>{tag}</Label>
//             <Label className='item-details-name'>{name}</Label>
//             <div style={{ padding: '10px 42px' }}>
//                 {action ? <Button {...action} /> : null}
//                 {description ? <p className='item-details-desc'>{description}</p> : null}
//             </div>
//         </figcaption>
//         <div className='item-bg'></div>
//     </div>
// </div>)

export { ProfileCard }