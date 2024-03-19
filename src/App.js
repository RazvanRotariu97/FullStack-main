import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import store from './store/configureStore';
import { Provider } from 'react-redux';
import AddBookForm from './components/AddBookForm';
import BookListContainer from './components/BookListContainer';
import { deleteBook } from './actions/booksActions';
import { sortBooks } from './actions/booksActions';
import Navbar from './components/Navbar';
import FirstPage from './components/FirstPage';


function App() {
  const handleDelete = (id) => {
    store.dispatch(deleteBook(id));
  };
  const handleSort = () => {
    store.dispatch(sortBooks());
  };

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<FirstPage/>}/>  
          <Route path="/book-list" element={<BookListContainer onDelete={handleDelete} onSort={handleSort} />} />
          <Route path="/add-book" element={<AddBookForm />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
