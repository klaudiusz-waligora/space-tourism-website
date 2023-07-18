<template>
  <div id="container">
    <h2 id="title"><span>01</span>pick your destination</h2>
    <div id="planet-image">
      <div
        class="planet-container planet"
        v-for="planet in content.destinations"
        :key="planet.name"
        :class="{
          active: activePlanet === planet.name,
        }"
      >
        <img :src="require(`../assets/destination/image-${planet.name}.png`)" />
      </div>
    </div>
    <div id="planet-wrapper">
      <div>
        <div id="planets-name-button-container">
          <button
            type="button"
            class="planetName hover-underline-animation"
            @click="togglePlanet(planet.name)"
            :key="planet.name"
            :class="{
              activePlanetName: planet.name === activePlanet,
            }"
            v-for="planet in content.destinations"
          >
            {{ planet.name }}
          </button>
        </div>

        <div id="planet-name">
          <h2
            class="planet-name planet"
            v-for="planet in content.destinations"
            :key="planet.name"
            :class="{ active: activePlanet === planet.name }"
          >
            {{ planet.name }}
          </h2>
        </div>

        <div id="planet-description">
          <div
            class="paragraph planet"
            v-for="planet in content.destinations"
            :key="planet.name"
            :class="{ active: activePlanet === planet.name }"
          >
            {{ planet.description }}
          </div>
        </div>

        <div id="separator"></div>

        <div id="distance">
          <div>
            <h3>avg. distance</h3>
            <div
              v-for="planet in content.destinations"
              :key="planet.name"
              class="planet distance"
              :class="{ active: activePlanet === planet.name }"
            >
              {{ planet.distance }}
            </div>
          </div>

          <div>
            <h3>est. travel time</h3>
            <div
              v-for="planet in content.destinations"
              :key="planet.name"
              class="planet distance"
              :class="{ active: activePlanet === planet.name }"
            >
              {{ planet.travel }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import content from "../assets/data.json";
export default {
  data() {
    return {
      content,
      activePlanet: "moon",
    };
  },
  methods: {
    togglePlanet(planetName) {
      this.activePlanet = planetName;
    },
  },
};
</script>

<style scoped>
#container::before {
  content: "";
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/destination/background-destination-desktop.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
}
.planet {
  display: none;
}
.active {
  display: block;
  border: none;
}

#title span {
  color: grey;
  margin-right: 1rem;
  font-weight: bold;
}
#title {
  font-family: "Barlow Condensed";
  text-transform: uppercase;
  font-weight: lighter;
  letter-spacing: 2.7px;
  color: white;
}

button {
  border: none;
  background-color: transparent;
  color: #d0d6f9;
  font-size: 1rem;
  height: 20px;
  text-transform: uppercase;
  letter-spacing: 2.36px;
  font-family: "barlow condensed";
  transition: 0.3s;
}

.planet-name {
  font-family: "bellefair";
  font-size: 4rem;
  text-transform: uppercase;
  color: white;
}

.paragraph {
  color: #d0d6f9;
  font-family: "Barlow";
  line-height: 25px;
}

#distance {
  font-size: 2rem;
  color: white;
  font-family: "Bellefair";
  text-transform: uppercase;
}

#distance h3 {
  font-family: "barlow condensed";
  font-size: 1rem;
  letter-spacing: 2.36px;
  text-transform: uppercase;

  color: #d0d6f9;

  margin: 1rem 0;
}

button.activePlanetName {
  padding-bottom: 22px;
  border-bottom: 3px solid white;
}
button.activePlanetName:after {
  background-color: transparent;
}

@media (min-width: 65.1em) {
  #container {
    margin-top: 15rem;
  }
  #planet-wrapper {
    width: 80%;
  }
  button.planetName {
    margin-right: 20px;
  }
  #planet-name {
    margin: 2rem 0;
  }
  #planet-description {
    width: 90%;
    height: 100px;
    margin-bottom: 4rem;
    font-size: 1.1rem;
  }
  #separator {
    width: 90% !important;
    margin-left: 0 !important;
    height: 10px;
  }
  #distance {
    display: flex;
    gap: 5rem;
  }
  #title {
    position: absolute;
    left: 10%;
    top: 20%;
  }
}
@media (max-width: 35em) {
  #container:before {
    background-image: url("../assets/destination/background-destination-mobile.jpg");
  }
  #container {
    text-align: center;
  }

  #title {
    font-size: 1rem;
  }

  img {
    width: 170px;
    height: 170px;

    margin-top: 2rem;
  }

  #planets-name-button-container {
    margin: 2rem 0;

    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  .planet-name {
    font-size: 4rem;
  }
  .paragraph {
    font-size: 1rem;
    width: 90%;
    margin: 1rem auto;
  }

  #separator {
    height: 2px;
    width: 80%;
    margin: 1rem auto;
    background-color: #383b4b;
    opacity: 0.5;
  }
}

@media (min-width: 35.001em) and (max-width: 65em) {
  #container:before {
    background-image: url("../assets/destination/background-destination-tablet.jpg");
  }
  #title {
    text-align: left;
    margin: 4rem 0 3rem 2rem;
  }

  .planet img {
    height: 300px;
    width: 300px;
  }
  button {
    font-size: 1.5rem;
    margin: 3rem 1.5rem;
  }
  .planet-name {
    font-size: 6rem;
  }

  .hover-underline-animation::after {
    bottom: -15px;
  }
  button.activePlanetName {
    padding-bottom: 32px;
  }
  .paragraph {
    width: 80%;
    margin: 0 auto;
    font-size: 1.3rem;
    line-height: 1.5;
  }

  #distance {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10rem;
  }
}
#separator {
  background-color: #383b4b;
  height: 2px;
  opacity: 0.5;
  width: 80%;
  margin: 2rem auto;
}
</style>
