import React from 'react';
import {
    Button,
    ProfileCard,
    Label
} from '../../components';



const Gallery = props => {
    const profileCardData = {
        tag: 'Top Artist',
        name: 'James Blunt',
        avatar: 'https://i.scdn.co/image/f87792caa6da101c22961f85effbb748a23ad3a1',
        action: {
            title: 'Play Now',
            href: '/'
        }
    }
    return (
        <React.Fragment>
            <h3>Gallery</h3>
            <div style={{ backgroundImage: 'linear-gradient(90deg, #2C5E92 0%, #552F6D 80%)', height: '360px', padding: '30px 0' }}>
                <ProfileCard {...profileCardData} />
            </div>

            <div>
                <Button title={'Button'} href={'/'} />
            </div>
            <div>
                <Label>Label#1</Label>
                <Label style={{color:'black'}}>Label#1</Label>
                <Label><Button title={'Button'} href={'/'} /></Label>
            </div>
        </React.Fragment>
    )
}

export default Gallery