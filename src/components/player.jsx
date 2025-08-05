"use client";

import { useState, useRef, useEffect } from "react";
import { Howl } from "howler";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaMusic,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Player = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const howlRef = useRef(null);
  const intervalRef = useRef(null);

  const tracks = [
    {
      id: 1,
      title: "RASSVET",
      artist: "Violinboy, ROB HAB, HABUDAI",
      duration: "2:45",
      src: "/public/mp3/RASSVET.mp3",
      cover: "/placeholder.webp",
    },
    {
      id: 2,
      title: "Останься",
      artist: "Violinboy, Sipmimisya",
      duration: "2:48",
      src: "/public/mp3/Ostansya.mp3",
      cover: "/placeholder.webp",
    },
    {
      id: 3,
      title: "Bad Bitch",
      artist: "Violinboy, Vibeskuka",
      duration: "2:57",
      src: "/public/mp3/Bad_Bitch.mp3",
      cover: "/placeholder.webp",
    },
    {
      id: 4,
      title: "Краски",
      artist: "Violinboy",
      duration: "1:21",
      src: "/public/mp3/Kraski.mp3",
      cover: "/placeholder.webp",
    },
    {
      id: 5,
      title: "Мадам",
      artist: "ROB HAB, Violinboy",
      duration: "3:00",
      src: "/public/mp3/Madam.mp3",
      cover: "/placeholder.webp",
    },
    {
      id: 6,
      title: "Аллилуйя",
      artist: "Violinboy, ROB HAB, HABUDAI",
      duration: "2:51",
      src: "/public/mp3/Alliluyya.mp3",
      cover: "/placeholder.webp",
    },
    {
      id: 7,
      title: "Stay With Me",
      artist: "Violinboy, ROB HAB",
      duration: "2:26",
      src: "/public/mp3/Stay_With_Me.mp3",
      cover: "/placeholder.webp",
    },
  ];

  useEffect(() => {
    if (tracks.length > 0) {
      playTrack(tracks[0]);
    }

    return () => {
      howlRef.current?.unload();
      clearInterval(intervalRef.current);
    };
  }, []);

  const playTrack = (track) => {
    if (howlRef.current) {
      howlRef.current.unload();
      clearInterval(intervalRef.current);
    }

    const sound = new Howl({
      src: [track.src],
      volume: isMuted ? 0 : volume,
      onload: () => setDuration(sound.duration()),
      onplay: () => {
        setIsPlaying(true);
        intervalRef.current = setInterval(() => {
          setCurrentTime(sound.seek());
        }, 1000);
      },
      onpause: () => {
        setIsPlaying(false);
        clearInterval(intervalRef.current);
      },
      onend: () => {
        setIsPlaying(false);
        setCurrentTime(0);
        clearInterval(intervalRef.current);
      },
    });

    howlRef.current = sound;
    setCurrentTrack(track);
    sound.play();
  };

  const togglePlayPause = () => {
    if (!howlRef.current) return;
    if (isPlaying) {
      howlRef.current.pause();
    } else {
      howlRef.current.play();
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (howlRef.current && !isMuted) {
      howlRef.current.volume(newVolume);
    }
  };

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    if (howlRef.current) {
      howlRef.current.volume(newMuted ? 0 : volume);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <section
      id="music"
      className="py-20 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text">
            Моя музыка
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Откройте для себя мои последние треки и окунитесь в мир мелодий,
            трогающих душу.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* PLAYER */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-xl p-6 shadow-card border border-border"
          >
            <div className="text-center mb-4">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-gradient-secondary rounded-xl flex items-center justify-center mb-3 shadow-elegant">
                {currentTrack ? (
                  <img
                    src={currentTrack.cover}
                    alt={currentTrack.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <FaMusic className="h-12 w-12 text-primary" />
                )}
              </div>

              {currentTrack && (
                <>
                  <h3 className="text-lg font-bold mb-1">
                    {currentTrack.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {currentTrack.artist}
                  </p>
                </>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <button
                  onClick={togglePlayPause}
                  disabled={!currentTrack}
                  className="w-14 h-14 bg-gradient-primary text-primary-foreground rounded-full flex items-center justify-center transition-all hover:scale-105 hover:shadow-glow disabled:opacity-50"
                >
                  {isPlaying ? (
                    <FaPause className="w-6 h-6" />
                  ) : (
                    <FaPlay className="w-6 h-6 ml-1" />
                  )}
                </button>
              </div>

              {currentTrack && (
                <>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-primary h-2 rounded-full"
                      style={{
                        width: `${
                          duration > 0 ? (currentTime / duration) * 100 : 0
                        }%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </>
              )}

              <div className="flex items-center space-x-3">
                <button
                  onClick={toggleMute}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {isMuted ? (
                    <FaVolumeMute className="w-5 h-5" />
                  ) : (
                    <FaVolumeUp className="w-5 h-5" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="flex-1 h-2 bg-muted rounded-lg cursor-pointer"
                  style={{ accentColor: "#8b5cf6" }} // violet-500
                />
              </div>
            </div>
          </motion.div>

          {/* PLAYLIST */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-xl p-6 shadow-card border border-border"
          >
            <h3 className="text-xl font-bold mb-4">Latest Tracks</h3>
            <div className="space-y-3">
              {tracks.map((track) => (
                <div
                  key={track.id}
                  onClick={() => {
                    if (currentTrack?.id === track.id) {
                      togglePlayPause();
                    } else {
                      playTrack(track);
                    }
                  }}
                  className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                    currentTrack?.id === track.id
                      ? "bg-primary/10 border border-primary/30"
                      : "hover:bg-muted/50 hover:shadow-md"
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                    {currentTrack?.id === track.id && isPlaying ? (
                      <FaPause className="h-5 w-5 text-primary" />
                    ) : (
                      <FaPlay className="h-5 w-5 text-primary ml-0.5" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold truncate">{track.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {track.artist}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      {track.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Player;
