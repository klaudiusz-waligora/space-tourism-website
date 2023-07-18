<template>
  <header>
    <div id="logo">
      <router-link to="/"
        ><img src="../img/shared/logo.svg" class="logo"
      /></router-link>
    </div>

    <button
      id="hamburgerBtn"
      @click="toggleMenu"
      :class="{ activeBtn: isMenuActive }"
      class="mobile-nav-toggle"
    ></button>

    <nav>
      <ul
        id="primary-navigation"
        class="primary-navigation flex"
        :data-visible="isMenuActive"
      >
        <li @click="toggleMenu">
          <router-link
            to="/"
            class="nav-link hover-underline-animation"
            :class="{ active: $route.path === '/' }"
            ><span id="number">00 </span>home
          </router-link>
        </li>

        <li @click="toggleMenu">
          <router-link
            to="/destination.vue"
            class="nav-link hover-underline-animation"
            :class="{ active: $route.path === '/destination.vue' }"
            ><span id="number">01 </span>destination</router-link
          >
        </li>
        <li @click="toggleMenu">
          <router-link
            to="/crew.vue"
            class="nav-link hover-underline-animation"
            :class="{ active: $route.path === '/crew.vue' }"
            ><span id="number">02 </span>crew</router-link
          >
        </li>
        <li @click="toggleMenu">
          <router-link
            to="/technology.vue"
            class="nav-link hover-underline-animation"
            :class="{ active: $route.path === '/technology.vue' }"
            ><span id="number">03 </span>technology</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  el: "#primary-navigation",
  data() {
    return {
      isMenuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
button {
  cursor: pointer;
}
a {
  text-decoration: none;
  text-transform: uppercase;
}
li {
  list-style: none;
  text-decoration: none;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0 1rem 2rem;
}
ul {
  display: flex;
  gap: 2rem;
}

.hover-underline-animation {
  display: inline-block;
  position: relative;
}

.hover-underline-animation::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: white;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.active {
  border-bottom: 3px solid white;
  padding-bottom: 3px;
}
.nav-link.active::after {
  background-color: transparent;
}
.hover-underline-animation:hover:not(.active, .activePlanetName)::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

@media (min-width: 65.1em) {
  #container {
    max-width: 1440px;
    margin: 0 auto;
  }
  .logo:hover {
    transform: scale(1.2);
    transition: ease-in-out.3s;
  }
  header {
    margin: 3rem 0 1rem 6rem;
  }
}

span#number {
  font-weight: bold;
}
.primary-navigation {
  background: hsl(0 0% 0% / 0.5);
  padding: 30px 100px;
}
@supports (backdrop-filter: blur(1rem)) {
  .primary-navigation {
    background: hsl(0 0% 100% / 0.1);
    backdrop-filter: blur(1rem);
  }
}

.mobile-nav-toggle {
  display: none;
}

.nav-link {
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-family: "Barlow Condensed";
  margin-right: 1rem;
}

.nav-link:hover:not(.active) {
}
@media (max-width: 35em) {
  .primary-navigation {
    gap: 2em;

    position: fixed;
    z-index: 99;
    inset: 0 0 0 20%;

    flex-direction: column;
    padding: min(30vh, 10rem) 2rem;

    transform: translateX(100%);
    transition: transform ease-out 350ms;
  }
  .primary-navigation[data-visible="true"] {
    transform: translateX(0%);
  }

  .mobile-nav-toggle {
    display: block;

    position: absolute;
    z-index: 999;

    width: 2rem;
    aspect-ratio: 1;
    right: 2rem;
    background: url("../img/shared/icon-hamburger.svg");
    background-repeat: no-repeat;
    background-position: center;
    border: 0;
  }
  .activeBtn {
    background: url("../img/shared/icon-close.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
}

@media (min-width: 35.001em) and (max-width: 65em) {
  .nav-link {
    font-size: 1.2rem;
  }

  .primary-navigation {
    padding: 15px 30px;
  }
  span#number {
    display: none;
  }
}
</style>
