<template>
  <div id="container">
    <div class="main-text">
      <h3>So, you want to travel to</h3>
      <h1>Space</h1>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
    <div class="inner-circle">
      <router-link
        to="/destination.vue"
        style="text-decoration: none; color: inherit"
      >
        <h1>explore</h1>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    toggleHover(value) {
      this.isHovered = value;
    },
  },
};
</script>

<style>
#container::before {
  content: "";
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/home/background-home-desktop.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
}

.main-text h3 {
  margin-top: 3rem;
  font-family: "Barlow Condensed";
  font-weight: 400;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 4.725px;
  line-height: 34px;
  font-style: normal;
  color: white;
}
.main-text h1 {
  margin: 1rem 0 1rem 0;
  font-family: "Bellefair";
  text-transform: uppercase;
  color: white;
  font-style: normal;
  font-weight: 400;
  font-size: 6rem;
}
.main-text p {
  font-family: "Barlow";
  font-size: 1rem;
  line-height: 28px;
  color: #d0d6f9;
  width: 90%;
  margin: 0 auto;
}
.inner-circle {
  width: 275px;
  height: 275px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
}
.inner-circle h1 {
  color: black;
  font-weight: normal;
  font-family: "bellefair";
}
@media (min-width: 65.1em) {
  #container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }
  #container .main-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    margin-top: 35%;
    width: 450px;
  }
  #container .main-text h3 {
    font-size: 2rem;
    margin: 0;
  }
  #container .main-text h1 {
    font-size: 150px;
    margin: 0;
  }
  #container .main-text p {
    text-align: justify;
    margin: 0;
  }
  .inner-circle {
    margin-top: 35%;
    border: none;
    transition: 0.3s;
  }
  .inner-circle:hover {
    transform: scale(1.2);
    background-color: rgba(255, 255, 255, 0.8);
  }
}
@media (max-width: 35em) {
  #container {
    text-align: center;
    color: white;
  }
  #container:before {
    background-image: url("../assets/home/background-home-mobile.jpg");
  }
  .main-text h3 {
    margin-top: 3rem;
    font-family: "Barlow Condensed";
    font-weight: 400;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 4.725px;
    line-height: 34px;
    font-style: normal;
  }
  .main-text h1 {
    margin: 1rem 0 1rem 0;
    font-family: "Bellefair";
    text-transform: uppercase;
    color: white;
    font-style: normal;
    font-weight: 400;
    font-size: 6rem;
  }
  .main-text p {
    font-family: "Barlow";
    font-size: 1rem;
    line-height: 28px;
    color: #d0d6f9;
    width: 90%;
    margin: 0 auto;
  }

  .inner-circle {
    width: 150px;
    height: 150px;
    margin: 5rem auto;
  }
  .inner-circle h1 {
    font-size: 20px;
  }
}
@media (min-width: 35.001em) and (max-width: 65em) {
  #container {
    text-align: center;
  }
  #container:before {
    background-image: url("../assets/home/background-home-tablet.jpg");
  }
  .main-text {
    margin-top: 10rem;
  }
  .main-text h3 {
    font-size: 1.25rem;
  }
  .main-text h1 {
    font-size: 10rem;
  }
  .main-text p {
    font-size: 1.3rem;
    line-height: 2;
    width: 80%;
  }
  .inner-circle {
    margin: 5rem auto;
  }

  .inner-circle h1 {
    font-size: 2rem;
  }
}
</style>
