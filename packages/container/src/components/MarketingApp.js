import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        // We are calling the mount function from the marketing app
        // and passing in the ref as the el parameter
        mount(ref.current);
    }, []);

    return <div ref={ref} />;
}