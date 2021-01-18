import React, { useState, useContext } from 'react';
//Context
import { BookListContext } from '../../context/BookListContext';
//Style
import './searchBook.scss';
//Dependencies
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBookMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchBook = () => {

    library.add(faBookMedical);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState(''); 
    const  [successAdded, setSuccessAdded] = useState(false)
    const { dispatch } = useContext(BookListContext);

    const updateBookList = (e) => {
        e.preventDefault();
        if(title.trim() !== '' && author.trim() !== '') {
            dispatch({ type:'ADD_BOOK', book: {
                title, author
            } });
            setSuccessAdded(true);
            setTimeout(() => {
                setSuccessAdded(false);
            },2000)
        }
        setTitle('');
        setAuthor('');
    }

    return (
        <div className="search">
            <form 
                onSubmit={updateBookList} 
                className="search-form"
            >
                    <input 
                    className="search-form__input" 
                    required 
                    name="title" 
                    type="text" 
                    value={title} 
                    placeholder=" Book's title" 
                    onChange={(e) => setTitle(e.target.value)}
                    aria-label="You can type the book's title here"
                    aria-required="true"
                />
                {successAdded && 
                    <div 
                        className="search-success"
                        aria-label="You added a book successfully"
                        aria-required="true"
                    >
                        <span>
                            Book added succesfully
                        </span>
                    </div>
                }
                <input 
                    className="search-form__input"
                    required 
                    name="author" 
                    type="text" 
                    value={author} 
                    placeholder="Book's author" 
                    onChange={(e) => setAuthor(e.target.value)}
                    aria-label="You can type the book's author here"
                    aria-required="true"
                />
                <button 
                    className="search-form__add" 
                    type="submit" 
                    aria-label="You'll to add a book"
                >
                    <FontAwesomeIcon icon={faBookMedical} />
                </button>
            </form>
        </div>
    )
};

export default SearchBook;
