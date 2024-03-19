import React from 'react';

const Rating = ({ rating, onRatingChange }) => {
  const stars = [1, 2, 3, 4, 5];

  const handleStarClick = (selectedRating) => {
    onRatingChange(selectedRating);
  };

  return (
    <div>
      {stars.map((star, index) => (
        <span 
          key={index} 
          style={{ color: star <= rating ? 'gold' : 'grey', cursor: 'pointer' }}
          onClick={() => handleStarClick(star)}
        >
          ★
        </span> 
      ))}
    </div>
  );
};

export default Rating;
