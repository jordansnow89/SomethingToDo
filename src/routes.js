import React from "react"
import { Switch, Route } from "react-router-dom"

import Home from  "./components/Home/Home";
import Login from  "./components/Login/Login";
import Profile from  "./components/Profile/Profile";
import Search from  "./components/Search/Search";
import Userlist from  "./components/UserList/UserList";
import EditProfile from  "./components/Profile/EditProfile";



export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/edit/:userid" component={EditProfile} />
        <Route path="/search" component={Search} />
        <Route path="/userlist" component={Userlist} />
    </Switch>
);
