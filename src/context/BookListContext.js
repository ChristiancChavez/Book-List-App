import React, { useState, createContext, useReducer, useEffect } from 'react';
//Reducer
import { bookListReducer } from './../reducers/bookReducer';

export const BookListContext = createContext();
const BookListContextProvider = (props) => {

    const [bookList, dispatch] = useReducer(bookListReducer, [], () => {
        const localDataMyList = localStorage.getItem('BookList');
        return localDataMyList ? JSON.parse(localDataMyList) : [];
    });

    const [readBookList, setReadBookList] = useState(JSON.parse(localStorage.getItem('ReadBookList')) || []);
    
    const [favoritesBookList, setFavoritesBookList] = useState(JSON.parse(localStorage.getItem('ReadBookList')) || []);

    const updateBookList = (bookList, book, bookListLocalStorage, author, id, SetBookList ) => {
        const verificationExistedBook = bookList.reduce((acc, books) => {
            const nameBook = Object.values(books)[0];
            acc = [...acc, nameBook ];
            return acc;
        }, []);

        const verification = verificationExistedBook.includes(book);
        const getLocalDataBookList = localStorage.getItem(bookListLocalStorage);

        if (getLocalDataBookList) {
            const updatedData = [...JSON.parse(getLocalDataBookList), {book:book, author:author, id:id}];
            window.localStorage.setItem(bookListLocalStorage, JSON.stringify(updatedData));
            if(!verification) {
                SetBookList(updatedData);
            }
        } else {
            window.localStorage.setItem(bookListLocalStorage, JSON.stringify([...bookList, {book:book, author:author, id:id}]));
            SetBookList([...bookList, {book, author, id}])
        }
    }

    const addToReadBookList = (book, author, id) => {
        updateBookList(readBookList, book, 'ReadBookList', author, id, setReadBookList);
    };

    const addToFavoriteBookList = (book, author, id) => {
        updateBookList(favoritesBookList, book, 'FavoritesBookList', author, id, setFavoritesBookList);
    };

    useEffect(() => {
        window.localStorage.setItem('BookList', JSON.stringify(bookList))
    }, [bookList]);

    return (
        <BookListContext.Provider value={{bookList, dispatch, readBookList, addToReadBookList, favoritesBookList, addToFavoriteBookList}}>
            {props.children}
        </BookListContext.Provider>
    );
};

export default BookListContextProvider;
