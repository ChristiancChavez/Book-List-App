import React from "react";
//Components 
import Home from '../../pages/Home';
import BookList from '../../pages/BookList';
import MyList from '../../pages/MyList';
import ReadBookList from './../../pages/ReadBookList';
import Favorites from '../../pages/Favorites';
//Dependencies
import { Switch, Route } from "react-router-dom";
const Main = () => (
    <div>
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/bookList" component={BookList} />
            <Route exact path="/myList" component={MyList} />
            <Route exact path="/read" component={ReadBookList} />
            <Route exact path="/favorites" component={Favorites} />
        </Switch>
    </div>
);

export default Main;
