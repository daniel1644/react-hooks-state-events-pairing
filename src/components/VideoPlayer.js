import React from 'react';

function VideoPlayer({ video, onUpvote, onDownvote }) {
  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <h2>{video.title}</h2>
      <p>
        {video.views} views • {video.createdAt}
      </p>
      <p>
        {video.upvotes} 👍 {video.downvotes} 👎
      </p>
      <button onClick={onUpvote}>👍</button>
      <button onClick={onDownvote}>👎</button>
    </div>
  );
}

export default VideoPlayer;