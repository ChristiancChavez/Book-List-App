import { React } from 'react';
//Components
import NavBar from './../NavBar/NavBar';
//Styles
import './header.scss';
const Header = () => (
    <div className="header">
        <h1 
            className="header__title"
            aria-label="This application's called BookList"    
        >
            BOOKLIST
        </h1>
        <NavBar />
    </div>
);

export default Header;
