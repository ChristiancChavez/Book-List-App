import React, { useContext } from 'react';
//Context
import { BookListContext } from './../../context/BookListContext';
//Components
import BookCardList from './../../Components/BookCardList/BookCardList';
import Error from './../../Components/Error/Error';
//Styles 
import './favorites.scss';

const Favorites = () => {
    const {favoritesBookList } = useContext(BookListContext);

    return favoritesBookList.length ? (
        <div 
            className="favorites"
            aria-label="This is your favorite book list, enjoy it"
        >
            {favoritesBookList.map(book => (
                <BookCardList 
                    book={book.book} 
                    author={book.author} 
                    key={book.id} 
                    id={book.id} 
                    readBook={false} 
                    favoriteBook={false} 
                    removeBook={false}
                    addBook={false}
                />
            ))}
        </div>
    ) : 
    (
        <Error 
            message="You haven't add books yet" 
        />
    )
};

export default Favorites;
