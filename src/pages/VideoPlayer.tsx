import React, { useEffect, useRef } from 'react';
import VLC from 'vlc-client';

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.log('VideoPlayer mounted');
    // Import and initialize the streaming library
    const StreamLibrary = require('stream-library');
    const streamInstance = new StreamLibrary({
      // Configure the stream URL
      url: 'rtsp://root:h@niJeet234!!@@@41.228.129.43:554/live1s4.sdp',
      // Additional configuration options as needed
    });

    // Attach the stream to the video element
    streamInstance.attachTo(videoRef.current as HTMLVideoElement);

    // Clean up on component unmount
    return () => {
      streamInstance.detach();
    };
  }, []);

  return (
    <div>
      <h1>Video Player</h1>
      <video ref={videoRef} controls autoPlay />
    </div>
  );
};

export default VideoPlayer;
