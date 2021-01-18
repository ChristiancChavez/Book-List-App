//Dependencies
const { v4: uuid_v4 } = require('uuid');

export const bookListReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_BOOK':
            return [
                ...state,
            {
                book: action.book.title,
                author: action.book.author,
                id: uuid_v4()
            }] 
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id)
        default:
        return state
    }
}