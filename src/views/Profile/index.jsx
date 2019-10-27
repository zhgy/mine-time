import React from 'react';

import { ProfileCard } from '../../components'
import './style.css';

const profileCardData = {
    tag: 'Top Artist',
    name: 'James Blunt',
    avatar: 'https://i.scdn.co/image/f87792caa6da101c22961f85effbb748a23ad3a1',
    action: {
        title: 'Play Now',
        href: '/'
    }
}
export const Profile = () =>
    (<React.Fragment>
        <ProfileCard {...profileCardData} />
        <h3>React</h3>
        <h2>A JavaScript library for building user interfaces</h2>
        <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
    </React.Fragment >)