import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import BookList from "./BookList";

const BookListContainer = ({ books, onDelete, onSort }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (books.length === 0) {
      window.location.href = "/add-book";
    }
  }, [books]); 

  return (
    <div className="d-flex flex-column align-items-center">
      <BookList books={books} onDelete={onDelete} onSort={onSort} />
      <Link to="/add-book">
        <Button className="mt-3">Înapoi la formularul de adăugare carte</Button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books
});

export default connect(mapStateToProps)(BookListContainer);
