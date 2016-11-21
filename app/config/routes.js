import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from '../components/main';
import Home from '../components/home';
import Login from '../components/auth/login';
import ResetPassword from '../components/auth/resetPassword';
import ChangePassword from '../components/auth/changePassword';
import NotFound from '../components/notfound';

// const routeChange = () => {
//     console.log('routeChange')
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0; // Firefox
//
// };
// class Routes extends Component {
//   
//     render() {
//         return (
//             <Router history={browserHistory}>
//                 <Route path="/" component={Main}>
//                     <IndexRoute component={Home}/>
//                     <Route path="signin" component={Login} />
//                     <Route path="reset-password" component={ResetPassword} />
//                     <Route path="change-password" component={ChangePassword}  />
//                 </Route>
//                 <Route path="*" component={NotFound} />
//             </Router>
//         )
//     }
// }

// const secureRouteChange = (nextState, replace, callback) => {
//     console.log('secureRouteChange')
//     if (AuthHelper.isAuthenticated()) {
//         console.log('isAuthenticated');
//         routeChange();
//         return callback();
//     }
//     replace('/signinx');
//     return callback();
// };

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path="home" component="{Home}" />
            <Route path="signin" component={Login} />
            <Route path="reset-password" component={ResetPassword} />
            <Route path="change-password" component={ChangePassword} />
        </Route>
        <Route path="*" component={NotFound} />
    </Router>
);

module.exports = routes;
