<template>
  <aside :class="`${isExpanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <img :src="logoURL" alt="Vue" />
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="toggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>

    <div class="menu">
      <router-link to="/" class="button">
        <span class="material-icons">home</span>
        <span class="text">Home</span>
      </router-link>
      <router-link to="/about" class="button">
        <span class="material-icons">description</span>
        <span class="text">About</span>
      </router-link>
      <router-link to="/playlist" class="button">
        <span class="material-icons"> music_note </span>
        <!-- <span class="material-icons"> play_circle </span> -->
        <span class="text">Playlist</span>
      </router-link>
      <router-link to="/contact" class="button">
        <span class="material-icons">email</span>
        <span class="text">Contact</span>
      </router-link>
    </div>

    <div class="flex"></div>
  </aside>
</template>

<script setup>
import { ref } from "vue";
import logoURL from "../assets/mj_logo.png";

const isExpanded = ref(localStorage.getItem("isExpanded") === "true");

const toggleMenu = () => {
  isExpanded.value = !isExpanded.value;
  localStorage.setItem("isExpanded", isExpanded.value);
};
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  background-color: var(--dark-blue);
  color: var(--white);
  width: 6.3rem;
  overflow: hidden;
  min-height: 100vh;
  padding: 1.4rem;
  transition: 0.2s ease-in-out;
  position: fixed;

  .flex {
    flex: 1 1 0%;
  }

  .logo {
    margin-bottom: 1.6rem;

    img {
      width: 3.2rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1.6rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;

    .menu-toggle {
      transition: 0.2s ease-in-out;
      .material-icons {
        font-size: 3.2rem;
        color: var(--white);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--turquoise-light);
          transform: translateX(0.8rem);
        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .menu {
    margin: 0 -1.6rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      transition: 0.2s ease-in-out;
      padding: 0.8rem 1.6rem;

      .material-icons {
        font-size: 3.2rem;
        color: var(--white);
        transition: 0.2s ease-in-out;
      }
      .text {
        color: var(--white);
        transition: 0.2s ease-in-out;
      }

      &:hover {
        color: var(--turquoise-light);

        .material-icons,
        .text {
          color: var(--turquoise-light);
        }
      }

      &.router-link-exact-active {
        background-color: var(--lost-light);
        border-right: 0.5rem solid var(--turquoise-light);

        .material-icons,
        .text {
          color: var(--turquoise-light);
        }
      }
    }
  }

  .footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    p {
      font-size: 1.4rem;
      color: var(--grey);
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -4.8rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3,
    .button .text {
      opacity: 1;
    }

    .button {
      .material-icons {
        margin-right: 1.6rem;
      }
    }

    .footer {
      opacity: 0;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: 99;
  }
}
</style>
