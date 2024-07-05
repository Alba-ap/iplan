// src/scenes/My Musics/MusicPlayerContext.js
import React, { createContext, useState, useRef, useContext } from "react";

const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
  const tracks = [
    {
      title: "Flynn Hanami",

      url: "/chars/music/flynn - Hanami - musicgeek.ir.mp3",
      poster: "/chars/music/posters/01.jpg",
    },
    {
      title: "Ginji Lullaby",
      url: "/chars/music/Ginji - Lullaby - musicgeek.ir.mp3",
      poster: "/chars/music/posters/02.jpg",
    },
    {
      title: "Hoogway Same Ocean ",
      url: "/chars/music/Hoogway - Same Ocean - musicgeek.ir.mp3 ",
      poster: "/chars/music/posters/03.jpg",
    },
    {
      title: "Idealism Nagashi",
      url: "/chars/music/Idealism - nagashi - musicgeek.ir.mp3",
      poster: "/chars/music/posters/05.jpg",
    },
    {
      title: "BIDO - last sunshine",
      url: "/chars/music/BIDO - last sunshine. - musicgeek.ir.mp3",
      poster: "/chars/music/posters/06.jpg",
    },
    {
      title: "Chaach - Stargazer",
      url: "/chars/music/Chaach - Stargazer - musicgeek.ir.mp3",
      poster: "/chars/music/posters/07.jpg",
    },
    {
      title: "Cosmonkey - Rainy ",
      url: "/chars/music/Cosmonkey - Rainy - musicgeek.ir.mp3",
      poster: "/chars/music/posters/08.jpg",
    },
    {
      title: "Goosetaf - Perpetual",
      url: "/chars/music/Goosetaf - Perpetual - musicgeek.ir.mp3",
      poster: "/chars/music/posters/09.jpg",
    },
    {
      title: "Jordy Chandra - Cloudy Sky",
      url: "/chars/music/Jordy Chandra - Cloudy Sky - musicgeek.ir.mp3",
      poster: "/chars/music/posters/10.jpg",
    },
  ];

  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(currentTrack.url));

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const value = {
    tracks,
    currentTrack,
    setCurrentTrack,
    isPlaying,
    setIsPlaying,
    audioRef,
    handlePlayPause,
  };

  return (
    <>
      <MusicPlayerContext.Provider value={value}>

        {children}
      </MusicPlayerContext.Provider>
    </>
  );
};

export const useMusicPlayer = () => useContext(MusicPlayerContext);
