import React, { useState } from 'react';
//Dependencies 
import axios from 'axios';
//Components
import BookCardList from './../../Components/BookCardList/BookCardList';
import Error from './../../Components/Error/Error';
//Styles
import './bookList.scss';
//Dependencies
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAtlas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const BookList = () => {

    library.add(faAtlas);
    const [bookList, setBookList] = useState([]);
    const [query, setQuery] = useState('');
    const requestData = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

    const fetchData = async () => {
        const request = await axios.get(requestData).then(function (response) {
            return response.data;
                }).catch(function (error) {
                    console.error(error);
                });
                setBookList(request.items);
                setQuery('')
    };

    return (
        <div 
            className="book-list"
            aria-label="You can search and looking for your favorites books or try someones news"
        >
            <input 
                className="book-list__search" 
                required 
                name="search" 
                value={query} 
                placeholder="Book's keyword"  
                onChange={(e) => setQuery(e.target.value)} type="text"
                aria-label="you can type the author, title or keyword of your desired book"
            />
            <button 
                className="book-list__icon"
                aria-label="Press this button to start the searching"
                onClick={fetchData}
            >
                <FontAwesomeIcon icon={faAtlas} 
            />
            </button>
            {bookList.length ? 
                (
                <div 
                    className="book-list__books"
                    aria-label="This are the results of your searching"
                >
                    {bookList.map(book => (
                        <BookCardList 
                            book={book.volumeInfo.title} 
                            author={book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'No author'} 
                            id={book.id} 
                            key={book.id} 
                            readBook={true} 
                            favoriteBook={true} 
                            removeBook={false} 
                            addBook={true}
                        />
                    ))}
                </div>
                ) :
                (
                    <Error 
                        message="That keyword doesn't match with any book" 
                    />
                )
            }
        </div>
    );
};

export default BookList;
