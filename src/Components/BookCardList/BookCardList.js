import React, { useContext, useState } from 'react';
//Context
import { BookListContext } from './../../context/BookListContext';
//Style 
import './bookCardList.scss';
//Dependencies
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBookDead, faBook, faStar, faBookMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BookCardList = ({ book, author, id, readBook, favoriteBook, removeBook, addBook }) => {
    

    library.add(faBookDead, faBook, faStar, faBookMedical);
    const { dispatch } = useContext(BookListContext);
    const { addToReadBookList, addToFavoriteBookList } = useContext(BookListContext);
    const [readIconStyle, setReadIconStyle] = useState(false);
    const [favoritesIconStyle, setFavoritesIconStyle] = useState(false);
    const [addIconStyle, setaddIconStyle] = useState(false);

    const setAddedReadBookList = (book, author, id) => {
        addToReadBookList(book, author, id);
        setReadIconStyle(true);
        dispatch({type:'REMOVE_BOOK', id:id})
    }

    const setAddedFavoritesBookList = (book, author, id) => {
        addToFavoriteBookList(book, author, id);
        setFavoritesIconStyle(true);
    }

    const setAddedMyBookList = (book, author) => {
        dispatch({type:'ADD_BOOK',  book: {title:book, author} })
        setaddIconStyle(true);
    }

    const setRemovedMyBookList = (id) => {
        dispatch({type:'REMOVE_BOOK', id:id})
    }
    
    return (
        <div 
            className="card"
            aria-label="This is a list of added books"
            aria-required="true"
        >
            <div 
                className="card-book"
                aria-label={`This card is a book, with a title ${book}, writer by ${author}`}
                >
                <h1 className="card-book__info">{book}</h1>
                <h2 className="card-book__info">{author}</h2>
            </div>
            <div className="card-interaction">
                {readBook &&
                    <button 
                        className="card-interaction__icon" 
                        onClick={() => setAddedReadBookList(book, author, id)}
                        aria-label={`If you click this icon you can add this book called ${book} to your Read book list`}
                    >
                        <FontAwesomeIcon icon={faBook} className={readIconStyle ? 'selected' : ''} />
                    </button>
                }
                {favoriteBook &&
                    <button 
                        className="card-interaction__icon" 
                        onClick={() => setAddedFavoritesBookList(book, author, id)}
                        aria-label={`If you click this icon you can add this book called ${book} to your Favorites book list`}
                    >
                        <FontAwesomeIcon icon={faStar} className={favoritesIconStyle ? 'selected' : ''} />
                    </button>
                }
                {addBook &&
                    <button 
                        className="card-interaction__icon" 
                        onClick={() => setAddedMyBookList(book, author)}
                        aria-label={`If you click this icon you can add this book called ${book} to your own book list`}
                    >
                        <FontAwesomeIcon icon={faBookMedical} className={addIconStyle ? 'selected' : ''} />
                    </button>
                }
                {removeBook &&
                    <button 
                        className="card-interaction__icon" 
                        onClick={() => setRemovedMyBookList(id)}
                        aria-label={`If you click this icon you can remove this book called ${book} from your own book list`}
                    >
                        <FontAwesomeIcon icon={faBookDead} />
                    </button>
                }
            </div>
        </div>
    );
};

export default BookCardList;
