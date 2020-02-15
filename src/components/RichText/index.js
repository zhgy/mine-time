import React from 'react';

const RichText = ({ content }) =>
    (<p dangerouslySetInnerHTML={{ __html: content }} />)

export { RichText };