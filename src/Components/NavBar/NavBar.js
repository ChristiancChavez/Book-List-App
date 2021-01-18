import React from 'react';
//Components
import OptionNavBar from './../OptionNavBar/OptionNavBar';
//Styles
import './navBar.scss';
//Dependencies
const { v4: uuid_v4 } = require('uuid');

const OPTIONS_NAV = [ 
    {category:'Add Book', id:uuid_v4(), route:'/home'},
    {category:'Own List', id:uuid_v4(), route:'/myList'},
    {category:'Read List', id:uuid_v4(), route:'/read'},
    {category:'Favorites List', id:uuid_v4(), route:'/favorites'},
    {category:'Book List', id:uuid_v4(), route:'/bookList'}, 
];

const NavBar = () => (
    <div 
        className="navbar"
        aria-label="It's a navbar, when you can redirect to add new book, your own book list, 
        list of added books, your own book list, your list of favorite books and searchin books"
    >
        {OPTIONS_NAV.map(option => <OptionNavBar category={option.category} key={option.id} route={option.route} />)}
    </div>
);

export default NavBar;
