import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createMemoryHistory, createBrowserHistory} from "history";

const mount = (el, {onNavigate, defaultHistory, initialPath}) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath],
    });

    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(<App history={history}/>, el)

    return {
        onParentNavigate( {pathname: nextPathName}) {
            if (history.location.pathname !== nextPathName) {
                history.push(nextPathName);
            }
        }
    }
};

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if (devRoot) {
        mount(devRoot, {defaultHistory: createBrowserHistory()});
    }
}

export {mount};