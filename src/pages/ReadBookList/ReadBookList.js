import React, { useContext } from 'react';
//Components
import Error from './../../Components/Error/Error';
import BookCardList from '../../Components/BookCardList/BookCardList';
//Context
import { BookListContext } from '../../context/BookListContext';
//Styles
import './readBookList.scss';


const ReadBookList = () => {
    
    const {readBookList} = useContext(BookListContext);
    return readBookList.length ? (
        <div 
            className="read-list"
            aria-label="This is your read book list, remember it"    
        >
            {readBookList.map(book => (
                <BookCardList 
                    book={book.book} 
                    author={book.author} 
                    key={book.id} 
                    id={book.id} 
                    readBook={false} 
                    favoriteBook={true} 
                    removeBook={false}
                    addBook={false}
                />
            ))}
        </div>
    ) : 
    (
        <Error message="You haven't add books yet" />
    )
};

export default ReadBookList;
