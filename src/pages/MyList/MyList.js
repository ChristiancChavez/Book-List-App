import React, { useContext } from 'react';
//Components
import BookCardList from './../../Components/BookCardList/BookCardList';
import Error from './../../Components/Error/Error';
//Context
import { BookListContext } from './../../context/BookListContext';
import './myList.scss';



const MyList = () => {

    const {bookList} = useContext(BookListContext);

    return bookList.length ? (
        <div 
            className="list"
            aria-label="This is your own book list,let's read"    
        >
            {bookList.map(book => (
                <BookCardList 
                    book={book.book} 
                    author={book.author} 
                    key={book.id} 
                    id={book.id} 
                    readBook={true} 
                    favoriteBook={false} 
                    removeBook={true}
                    addBook={false}
                />
            ))}
        </div>
    ) : 
    (
        <Error message="You haven't add books yet" />
    )
};

export default MyList;
