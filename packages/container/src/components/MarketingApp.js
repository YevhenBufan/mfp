import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import {useHistory} from "react-router-dom";

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        // We are calling the mount function from the marketing app
        // and passing in the ref as the el parameter
        const {onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ( {pathname: nextPathName} ) => {
                if (history.location.pathname !== nextPathName) {
                    history.push(nextPathName)
                }
            }
        });
        history.listen(onParentNavigate)
    }, []);

    return <div ref={ref} />;
}