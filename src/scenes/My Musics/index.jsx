import React, { useState, useEffect } from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import PauseRounded from "@mui/icons-material/PauseRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import LoopRoundedIcon from "@mui/icons-material/LoopRounded";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import Slider from "@mui/material/Slider";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import { useMusicPlayer } from "./MusicPlayerContext";

const MusicPlayerContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const PlayerBox = styled.div`
  flex: 2;
  justify-content: center;
  direction: ltr;
  margin-bottom: 2rem;
  margin-right: 30px;
  width: 100%;
`;

const TrackListBox = styled.div`
  flex: 1;
  direction: ltr;
  margin-right: 30px;
  padding: 20px;
  box-shadow: 0 16px 24px rgba(104, 112, 250, 0.5);
  overflow-y: auto; /* Enable vertical scrolling */
`;

const TrackItem = styled.div`
  padding: 25px;
  margin: 30px 0;
  box-shadow: 0 8px 16px rgba(104, 112, 250, 0.5);
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background: #6870fa;
  }
`;

const Title = styled.h1`
  font-family: "Courier New", Courier, monospace;
  font-size: 2em;
  color: #333;
`;

const TrackTitle = styled.h2`
  font-family: "Courier New", Courier, monospace;
  font-size: 1.2em;
  color: #666;
`;

const VolumeControl = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: "#6870fa";
`;

const VolumeSlider = styled(Slider)`
  width: 10rem;
  margin-left: 2rem;
  color: "#6870fa";
`;

const TimeDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  color: "#6870fa";
  font-family: "Courier New", Courier, monospace;
`;

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const MyMusic = () => {
  const {
    tracks,
    currentTrack,
    setCurrentTrack,
    isPlaying,
    setIsPlaying,
    audioRef,
    handlePlayPause,
  } = useMusicPlayer();
  const [volume, setVolume] = useState(50); // Initial volume state
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      const updateCurrentTime = () =>
        setCurrentTime(audioRef.current.currentTime);
      audioRef.current.addEventListener("timeupdate", updateCurrentTime);

      const updateDuration = () => setDuration(audioRef.current.duration);
      audioRef.current.addEventListener("loadedmetadata", updateDuration);

      return () => {
        audioRef.current.removeEventListener("timeupdate", updateCurrentTime);
        audioRef.current.removeEventListener("loadedmetadata", updateDuration);
      };
    }
  }, [audioRef]);

  const handleStop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  const handlePrevious = () => {
    const currentIndex = tracks.findIndex((track) => track === currentTrack);
    const newIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrack(tracks[newIndex]);
    audioRef.current.src = tracks[newIndex].url;
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const handleNext = () => {
    const currentIndex = tracks.findIndex((track) => track === currentTrack);
    const newIndex = (currentIndex + 1) % tracks.length;
    setCurrentTrack(tracks[newIndex]);
    audioRef.current.src = tracks[newIndex].url;
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    audioRef.current.volume = newValue / 100;
  };

  const handleTimeChange = (event, newValue) => {
    audioRef.current.currentTime = newValue;
    setCurrentTime(newValue);
  };

  const selectTrack = (track) => {
    if (track !== currentTrack) {
      if (isPlaying) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setCurrentTrack(track);
      audioRef.current.src = track.url;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <MusicPlayerContainer>
      <PlayerBox>
        <Card
          variant="outlined"
          sx={{
            p: 30,
            boxShadow: "0 8px 16px rgba(104, 112, 250, 0.5)",
            backgroundColor: "transparent",
            borderRadius: "30px",
            textAlign: "center",
            justifyContent: "center",
            width: { xs: "100%", sm: "auto" },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <CardMedia
            component="img"
            width="400"
            height="400"
            alt={currentTrack.title}
            src={currentTrack.poster}
            sx={{
              width: { xs: "100%", sm: 300 },
              height: { xs: "100%", sm: 300 },
              borderRadius: "50%",
              marginRight: "3rem",
              boxShadow: `
              0 8px 16px rgba(0, 123, 255, 0.3),
              0 12px 24px rgba(0, 123, 255, 0.2),
              0 16px 32px rgba(0, 123, 255, 0.1)
            `,
            }}
          />

          <Stack direction="column" alignItems="center" spacing={1} useFlexGap>
            <div>
              <Typography
                color="text.primary"
                fontWeight="semiBold"
                fontSize="1rem"
              >
                {currentTrack.title}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                fontWeight="medium"
                textAlign="center"
                sx={{ width: "100%" }}
              >
                Artist Name
              </Typography>
            </div>
            <TimeDisplay>
              <Typography>{formatTime(currentTime)}</Typography>
              <Typography>{formatTime(duration)}</Typography>
            </TimeDisplay>
            <Slider
              sx={{ color: "#6870fa" }}
              value={currentTime}
              onChange={handleTimeChange}
              min={0}
              max={duration}
              aria-labelledby="continuous-slider"
            />
            <Stack direction="row" alignItems="center" spacing={1} useFlexGap>
              <IconButton aria-label="Shuffle" disabled size="small">
                <ShuffleRoundedIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="Fast rewind"
                onClick={handlePrevious}
                size="small"
              >
                <FastRewindRounded fontSize="small" />
              </IconButton>
              <IconButton
                aria-label={isPlaying ? "Pause music" : "Play music"}
                onClick={handlePlayPause}
                sx={{ mx: 1 }}
              >
                {isPlaying ? <PauseRounded /> : <PlayArrowRounded />}
              </IconButton>
              <IconButton
                aria-label="Fast forward"
                onClick={handleNext}
                size="small"
              >
                <FastForwardRounded fontSize="small" />
              </IconButton>
              <IconButton aria-label="Loop music" disabled size="small">
                <LoopRoundedIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="Stop music"
                onClick={handleStop}
                size="small"
              >
                <StopRoundedIcon fontSize="small" />
              </IconButton>
            </Stack>
            <VolumeControl>
              {volume > 0 ? <VolumeUpIcon /> : <VolumeOffIcon />}
              <VolumeSlider
                value={volume}
                onChange={handleVolumeChange}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                sx={{ color: "#6870fa" }}
              />
            </VolumeControl>
          </Stack>
        </Card>
      </PlayerBox>
      <TrackListBox>
        {tracks.map((track, index) => (
          <TrackItem
            key={index}
            isSelected={track === currentTrack}
            onClick={() => selectTrack(track)}
          >
            {track.title}
          </TrackItem>
        ))}
      </TrackListBox>
    </MusicPlayerContainer>
  );
};

export default MyMusic;
