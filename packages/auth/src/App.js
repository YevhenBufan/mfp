import React from 'react';
import { Switch, Route, Router} from 'react-router-dom';
import { StylesProvider, createGenerateClassName} from '@material-ui/core/styles';

import SignIn from './components/Signin';
import SingUp from './components/Signup';

const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
})

export default ( { onSignIn, history} ) => {

    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/auth/signin">
                        <SignIn onSignIn={onSignIn}/>
                    </Route>
                    <Route exact path="/auth/signup">
                        <Signup onSignIn={SingUp}/>
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}