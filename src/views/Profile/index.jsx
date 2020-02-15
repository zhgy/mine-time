import React from 'react';

import { ProfileCard } from '../../components'
import './style.css';


export const Profile = () =>
    (<React.Fragment>
        <ProfileCard
            tag='React'
            name='James Blunt'
            avatar='https://i.scdn.co/image/f87792caa6da101c22961f85effbb748a23ad3a1'
            description='React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'
            action={{ title: 'Play Now', href: '/' }}
        />
    </React.Fragment >)