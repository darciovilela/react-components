// Basic import
import React from 'react';

// Component
const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="img" src={props.image} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="date">
          <span className="time">{props.time}</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};

// Export
export default CommentDetail;
