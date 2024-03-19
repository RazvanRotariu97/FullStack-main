const initialState = {
    books: []
};

const booksReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_BOOK':
            return {
                books: [...state.books, { ...action.payload, id: state.books.length + 1 }]
            };
        case 'DELETE_BOOK':
            return {
                books: state.books.filter(book => book.id !== action.payload)
            };
        case 'UPDATE_RATING':
            return {
                books: state.books.map(book =>
                book.id === action.payload.bookId ? { ...book, rating: action.payload.rating } : book)
            };
        case 'SORT_BOOKS':
            return {
                books: state.books.slice().sort((a, b) => a.title.localeCompare(b.title))
            };
        default:
            return state;
    }
};

export default booksReducer;
