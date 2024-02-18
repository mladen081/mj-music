<template>
  <main>
    <div class="home-cont pt-128">
      <h1>Play Time</h1>

      <section class="player">
        <h2 class="song-title">
          {{ current.title }} - <span>{{ current.artist }}</span>
        </h2>
        <div class="controls">
          <button class="prev" @click="prev">Prev</button>
          <button class="play" v-if="!isPlaying" @click="play">Play</button>
          <button class="pause" v-else @click="pause">Pause</button>
          <button class="next" @click="next">Next</button>
        </div>
      </section>
      <section class="playlist all">
        <h3>The Playlist</h3>
        <button
          v-for="song in songs"
          :key="song.src"
          @click="play(song)"
          :class="song.src == current.src ? 'song playing' : 'song'"
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
  methods: {
    async play(song) {
      if (typeof song.src != "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }
      await this.player.play();
      this.player.addEventListener(
        "ended",
        function () {
          this.index++;
          if (this.index > this.songs.length - 1) {
            this.index = 0;
          }
          this.current = this.songs[this.index];
          this.play(this.current);
        }.bind(this)
      );
      this.isPlaying = true;
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    next() {
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
    prev() {
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
  },
  created() {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
  },
  beforeUnmount() {
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
.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 15px;
  margin-bottom: 5rem;
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
  padding: 10px 15px;
  margin: 0px 15px;
  border-radius: 2px;
  width: 150px;
  border: 2px solid var(--light-blue);
}
.next,
.prev {
  font-weight: 700;
  padding: 10px 15px;
  margin: 0px 15px;
  border-radius: 5px;
  border: 2px solid var(--light-blue);
}

.playlist.all {
  padding: 10px;
  border-radius: 5px;
  border: 2px solid var(--light-blue);
  margin: 1rem auto;
  width: 50%;
}
.playlist {
  padding: 0px 20px;
}
.playlist .song {
  display: block;
  width: 100%;
  padding: 15px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  color: var(--light-blue);
  margin: 20px 0 20px 0;
}
.playlist .song:hover {
  color: #000;
}
.playlist .song.playing {
  color: var(--light-blue);
  border: 2px solid var(--light-blue);
  border-radius: 5px;
}

.playlist .song.playing:hover {
  color: #000;
}

@media (max-width: 767px) {
  .next,
  .prev {
    margin: 5px 0;
  }
  .play,
  .pause {
    width: 100px;
  }
  .playlist.all {
    width: 90%;
  }
}
</style>
