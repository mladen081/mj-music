<template>
  <main>
    <div class="home-cont pt-128">
      <h1>Play Time</h1>

      <section class="player">
        <h2 class="song-title" @click="resetSong(current)">
          {{ current.title }} - {{ current.artist }}
        </h2>
        <div class="controls">
          <button class="prev" @click="prev">Prev</button>
          <button class="play" v-if="!isPlaying" @click="play(current)">
            Play
          </button>
          <button class="pause" v-else @click="togglePlayback">Pause</button>
          <button class="next" @click="next">Next</button>
        </div>
        <div class="stop-control">
          <button class="stop" @click="stop">Stop</button>
        </div>
        <div class="progress-bar">
          <div class="progress" :style="{ width: progress + '%' }"></div>
        </div>
      </section>
      <section class="playlist all">
        <h3>The Playlist</h3>
        <button
          v-for="song in songs"
          :key="song.src"
          @click="play(song)"
          :class="{
            'song playing': song.src === current.src && isPlaying,
            song: true,
          }"
        >
          {{ song.title }} - {{ song.artist }}
        </button>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      current: {},
      index: 0,
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      songs: [
        {
          title: "1. Song 1",
          artist: "Unknown",
          src: "/s1.mp3",
        },
        {
          title: "2. Song 2",
          artist: "Unknown",
          src: "/s2.mp3",
        },
      ],
      player: new Audio(),
    };
  },
  computed: {
    progress() {
      if (this.duration) {
        return (this.currentTime / this.duration) * 100;
      } else {
        return 0;
      }
    },
  },
  methods: {
    togglePlayback() {
      if (this.player.paused) {
        // If the audio is paused, play the song
        this.play(this.current);
      } else {
        // If the audio is playing, pause the song
        this.pause();
      }
    },
    play(song) {
      const index = this.songs.findIndex((s) => s.src === song.src);
      if (index === -1) {
        console.error("Song not found in the playlist");
        return;
      }

      this.index = index; // Update the index

      if (this.player.src !== song.src) {
        // Load new song
        this.current = song;
        this.player.src = this.current.src;
      }

      // Set the playback position to the stored current time
      this.player.currentTime = this.currentTime;

      // Check if the audio is paused, then play
      if (this.player.paused) {
        // Play the song
        this.player.play();
        // Update playback status
        this.isPlaying = true;
      }
    },
    pause() {
      this.player.pause();
      // Store the current playback position
      this.currentTime = this.player.currentTime;
      this.isPlaying = false;
    },
    next() {
      this.index = (this.index + 1) % this.songs.length;
      this.current = this.songs[this.index];
      this.resetSong(); // Reset song before playing the next one
    },
    prev() {
      this.index = (this.index - 1 + this.songs.length) % this.songs.length;
      this.current = this.songs[this.index];
      this.resetSong(); // Reset song before playing the previous one
    },
    stop() {
      this.player.pause();
      this.player.currentTime = 0; // Reset current time to 0
      this.isPlaying = false;
    },
    resetSong(song) {
      if (song) {
        // If a specific song is provided, reset that song
        if (this.current.src === song.src) {
          this.player.currentTime = 0; // Reset current time to 0
          this.player.load(); // Reload the audio file
          this.isPlaying = false; // Set isPlaying to false
        }
      } else {
        // If no specific song is provided, reset the currently playing song
        this.player.currentTime = 0; // Reset current time to 0
        this.player.load(); // Reload the audio file
        this.isPlaying = false; // Set isPlaying to false
      }
    },
    updateTime() {
      this.currentTime = this.player.currentTime;
      this.duration = this.player.duration;
    },
    songEnded() {
      // Automatically play the next song when the current one ends
      this.next();
    },
  },
  created() {
    this.current = this.songs[0]; // Set current to the first song in the playlist
    this.player.addEventListener("timeupdate", this.updateTime);
    this.player.addEventListener("ended", this.songEnded);
  },
  beforeDestroy() {
    this.player.removeEventListener("timeupdate", this.updateTime);
    this.player.removeEventListener("ended", this.songEnded);
    this.player.pause();
    this.isPlaying = false;
  },
};
</script>

<style scoped>
.home-cont {
  height: 100vh;
}

.home-cont h1 {
  color: var(--light-blue);
}

.song-title span {
  font-weight: 700;
}
.controls,
.stop-control {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1.5rem;
  margin-bottom: 1rem;
}
button {
  appearance: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: var(--light-blue);
}
button:hover {
  color: #000;
  background-color: var(--light-blue);
}
.play,
.pause {
  font-weight: 700;
  padding: 1rem 1.5rem;
  margin: 0px 1.5rem;
  border-radius: 0.5rem;
  width: 15rem;
  border: 0.2rem solid var(--light-blue);
}
.next,
.prev {
  font-weight: 700;
  padding: 1rem 1.5rem;
  margin: 0px 1.5rem;
  border-radius: 0.5rem;
  border: 0.2rem solid var(--light-blue);
}

.stop {
  font-weight: 700;
  padding: 1rem 1.5rem;
  margin: 0px 1.5rem;
  border-radius: 0.5rem;
  border: 0.2rem solid var(--light-blue);
  color: var(--light-blue);
  cursor: pointer;
}

.stop:hover {
  color: #000;
  background-color: var(--light-blue);
}

.playlist.all {
  padding: 1rem;
  border-radius: 0.5rem;
  border: 0.2rem solid var(--light-blue);
  margin: 1.6rem auto;
  width: 50%;
}
.playlist {
  padding: 0px 2rem;
}
.playlist .song {
  display: block;
  width: 100%;
  padding: 0.3rem;
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;
  color: var(--light-blue);
  margin: 1.8rem 0 1.8rem 0;
}
.playlist .song:hover {
  color: #000;
}

.playlist .song.playing {
  color: #f778ba;
  border: 0.2rem #f778ba;
  border-radius: 0.5rem;
}

.playlist .song.playing:hover {
  color: #000;
}

.progress-bar {
  width: 90%;
  height: 3rem;
  background-color: var(--light-blue);
  margin: 1.6rem auto;
  border-radius: 0.5rem;
  border: 0.2rem solid var(--light-blue);
  --progress: 0;
}

.progress {
  height: 100%;
  background-color: var(--lost-light);
  border-radius: 0.5rem;
  width: var(--progress);
}

@media (max-width: 767px) {
  .next,
  .prev {
    margin: 0.5rem 0;
  }
  .play,
  .pause {
    width: 6rem;
  }
  .playlist.all {
    width: 84%;
  }
}
</style>
