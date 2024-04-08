"use client";
import React, { useRef } from "react";

const VideoComponent = () => {
  const videoRef = useRef(null);
  const buttonRef = useRef(null);

  const playPause = () => {
    const video = videoRef.current;
    const button = buttonRef.current;

    if (video.paused) {
      video.play();
      button.style.background = "none";
    } else {
      video.pause();
      button.style.background = "url(/play.svg) no-repeat";
    }
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        muted
        onCanPlay={() => videoRef.current.play()}
        id="myvid"
        className="h-[353px] w-full xl:h-[441px] xl:w-[394px] 2xl:h-[495px] 2xl:w-[435px]  object-cover"
        poster="/video-preview.jpg"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <button
        ref={buttonRef}
        className="bg-center bg-no-repeat w-[80px] h-[80px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        onClick={playPause}
        style={{
          backgroundImage: "url(/play.svg)",
        }}
      ></button>
    </div>
  );
};

export default VideoComponent;
