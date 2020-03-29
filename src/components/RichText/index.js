import React, { useRef, useEffect } from 'react';

export const RichText = ({ content }) => {
    const htmlRef = useRef();
    useEffect(() => {
        if (htmlRef.current) {
            htmlRef.current.innerHTML = content;
        }
    },[content]);
    

    return (<div ref={htmlRef}>Loading</div>);
}
