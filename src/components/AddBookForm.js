import React, {useState} from "react";
import { connect } from "react-redux";
import { addBook } from "../actions/booksActions";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Rating from "./Rating";

const AddBookForm = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [rating, setRating] = useState(0);

    const handleAddBook = () =>{
        dispatch(addBook({title, author, rating}));
        setTitle('');
        setAuthor('');
        setRating(0);
        navigate('/book-list');
    }

    const handleRatingChange = (selectedRating) => {
        setRating(selectedRating);
    }

    return (
        <div className="container text-center">
            <h2>Add a book:</h2>
            
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Author:</label>
                        <input type="text" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} />
                    </div> 
            <div>
                <h6><i>*Poti adauga si un rating cartii tale*</i></h6>
                <h5 class="rating">Rating:</h5>
                <Rating rating={rating} onRatingChange={handleRatingChange} />
            </div>
                <button className="btn btn-primary" onClick={handleAddBook}>Add book</button>
            </div>

            </div>
        </div>
    )
}

export default connect()(AddBookForm);