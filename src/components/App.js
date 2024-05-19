import React, { useState } from 'react';
import video from '../data/video.js';
import VideoPlayer from './VideoPlayer';
import Comments from './Comments';

function App() {
  const [videoData, setVideoData] = useState(video);

  const handleUpvote = () => {
    setVideoData({
      ...videoData,
      upvotes: videoData.upvotes + 1,
    });
  };

  const handleDownvote = () => {
    setVideoData({
      ...videoData,
      downvotes: videoData.downvotes + 1,
    });
  };

  const handleToggleComments = () => {
    setVideoData({
      ...videoData,
      showComments: !videoData.showComments,
    });
  };

  return (
    <div className="App">
      <VideoPlayer video={videoData} onUpvote={handleUpvote} onDownvote={handleDownvote} />
      <Comments video={videoData} onToggleComments={handleToggleComments} />
    </div>
  );
}

export default App;
