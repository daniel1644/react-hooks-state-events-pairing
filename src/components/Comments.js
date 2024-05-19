import React from 'react';

function Comments({ video, onToggleComments }) {
  return (
    <div>
      {video.showComments && (
        <div>
          {video.comments.map((comment) => (
            <div key={comment.id}>
              <p>{comment.user}: {comment.comment}</p>
            </div>
          ))}
        </div>
      )}
      <button onClick={onToggleComments}>
        {video.showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
    </div>
  );
}

export default Comments;