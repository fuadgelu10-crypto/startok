
import React, { useRef, useState, useEffect } from 'react';
import { Video } from '../types';
import { Icons } from '../constants';

interface VideoCardProps {
  video: Video;
  isActive: boolean;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, isActive }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.play().catch(e => console.log('Autoplay blocked'));
      setIsPlaying(true);
    } else if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="video-card relative h-screen w-full bg-black flex items-center justify-center snap-start overflow-hidden">
      <video
        ref={videoRef}
        src={video.url}
        loop
        className="h-full w-full object-cover cursor-pointer"
        onClick={togglePlay}
        playsInline
      />

      {/* Overlay UI */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/20 via-transparent to-black/60" />

      {/* Action Buttons */}
      <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6 pointer-events-auto">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden mb-2">
            <img src={video.author.avatar} alt={video.author.username} className="w-full h-full object-cover" />
          </div>
          <div className="bg-red-500 rounded-full w-5 h-5 -mt-4 flex items-center justify-center text-xs font-bold">+</div>
        </div>

        <div className="flex flex-col items-center">
          <button className="text-white hover:text-red-500 transition-colors">
            <Icons.Heart />
          </button>
          <span className="text-xs font-semibold">{(video.likes / 1000).toFixed(1)}K</span>
        </div>

        <div className="flex flex-col items-center">
          <button className="text-white">
            <Icons.Comment />
          </button>
          <span className="text-xs font-semibold">{video.comments}</span>
        </div>

        <div className="flex flex-col items-center">
          <button className="text-white">
            <Icons.Share />
          </button>
          <span className="text-xs font-semibold">{video.shares}</span>
        </div>

        <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center animate-spin-slow">
           <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
             <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
           </div>
        </div>
      </div>

      {/* Video Info */}
      <div className="absolute left-4 bottom-24 max-w-[80%] pointer-events-auto">
        <h3 className="font-bold text-lg mb-1">@{video.author.username}</h3>
        <p className="text-sm mb-2 line-clamp-2">{video.description}</p>
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="text-lg">🎵</span>
          <div className="flex whitespace-nowrap animate-marquee">
            <span className="text-sm">{video.music}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
