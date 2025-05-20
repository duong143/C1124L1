import React from 'react';

function FeedbackButtons({ onFeedback }) {
  return (
    <div>
      <button onClick={() => onFeedback('like')}>Like</button>
      <button onClick={() => onFeedback('dislike')}>Dislike</button>
    </div>
  );
}

export default FeedbackButtons;
