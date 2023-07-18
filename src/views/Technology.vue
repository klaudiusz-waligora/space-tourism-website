<template>
  <div id="container">
    <h2 id="title"><span>03</span>space launch 101</h2>

    <div id="image-container">
      <img
        v-for="item in content.technology"
        class="item desktop"
        :key="item.name"
        :class="{ active: activeItem === item.name }"
        :src="
          require(`../assets/technology/image-${item.name.toLowerCase()}.jpg`)
        "
      />
      <img
        v-for="item in content.technology"
        class="item mobile centered-image"
        :key="item.name"
        :class="{ active: activeItem === item.name }"
        :src="
          require(`../assets/technology/image-${
            item.name.toLowerCase() + '-landscape'
          }.jpg`)
        "
      />
    </div>

    <div class="content-wrapper">
      <div id="button-container">
        <button
          @click="toggleItem(item.name)"
          type="button"
          :key="item.name"
          v-for="(item, index) in content.technology"
          :class="{ btnActive: activeItem === item.name }"
        >
          {{ index + 1 }}
        </button>
      </div>

      <div class="text-wrapper">
        <h4>the terminology...</h4>
        <div
          id="item-name"
          class="item name"
          v-for="item in content.technology"
          :key="item.name"
          :class="{ active: activeItem === item.name }"
        >
          <h2>
            {{ item.name }}
          </h2>
        </div>

        <div
          id="description"
          class="item description"
          v-for="item in content.technology"
          :key="item.name"
          :class="{ active: activeItem === item.name }"
        >
          <p>
            {{ item.description }}
          </p>
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
      activeItem: "Launch vehicle",
      currentIndex: 0,
    };
  },
  mounted() {
    this.startIteration();
  },
  methods: {
    toggleItem(itemName) {
      this.activeItem = itemName;
      this.currentIndex = this.content.technology.findIndex(
        (item) => item.name === itemName
      );
    },
    startIteration() {
      this.updateItem();
      setInterval(() => {
        this.updateItem();
      }, 4000);
    },
    updateItem() {
      this.activeItem = this.content.technology[this.currentIndex].name;
      this.currentIndex =
        (this.currentIndex + 1) % this.content.technology.length;
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
  background-image: url("../assets/technology/background-technology-desktop.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
}
.active {
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

.btnActive {
  background-color: #ffffff;
  color: black;
}
button {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background-color: transparent;
  font-family: "Bellefair";
  font-size: 2rem;
  color: white;
  cursor: pointer;
}
button:hover {
  border-color: white;
}

.name {
  font-size: 1rem;
  font-family: "bellefair";
  text-transform: uppercase;
  color: white;
}

.description {
  font-family: "barlow";
  color: #d0d6f9;
  line-height: 2;
  width: 90%;
  margin: 0 auto;
}
h4 {
  font-size: 1rem;
  color: #d0d6f9;
  letter-spacing: 2.36px;
  font-family: "barlow condensed";
  text-transform: uppercase;
  font-weight: lighter;
}
@media (min-width: 65.1em) {
  #title {
    position: absolute;
    left: 10%;
    top: 20%;
  }
  .item.mobile,
  .item {
    display: none;
  }
  .active {
    display: block;
  }
  #container {
    margin-top: 10rem;
    display: flex;
    flex-direction: row-reverse;
  }
  .content-wrapper {
    display: flex;
    gap: 3rem;
    margin-top: -5rem;
  }
  #button-container {
    display: flex;
    margin-left: 2rem;
    gap: 2rem;
    flex-direction: column;
    justify-content: center;
  }
  .text-wrapper {
    display: flex;
    flex-direction: column;
  }

  h4 {
    font-size: 1.5rem;
  }
  #item-name {
    font-size: 2rem;
    /* width: 500px; */
    margin: 1rem 0;
  }
  #description {
    margin: 0;
    min-height: 200px;
    font-size: 1.3rem;
  }
}

@media (max-width: 35em) {
  #container:before {
    background-image: url("../assets/technology/background-technology-mobile.jpg");
  }
  #container {
    text-align: center;
  }
  .item {
    display: none;
  }
  .item.desktop {
    display: none;
  }
  .active {
    display: block;
    border: none;
  }
  #title {
    font-size: 1rem;
  }
  #image-container {
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .centered-image {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }
  button {
    height: 40px;
    width: 40px;
    margin: 1rem;
    font-size: 1rem;
  }

  h4 {
    font-size: 1rem;
    letter-spacing: 2.36px;
    margin: 1rem 0;
  }
  .name {
    font-size: 1.5rem;
  }
  .description {
    margin-top: 2rem;
    font-size: 1rem;
    width: 90%;
  }
}

@media (min-width: 35.001em) and (max-width: 65em) {
  #container:before {
    background-image: url("../assets/technology/background-technology-tablet.jpg");
  }
  #container {
    text-align: center;
  }
  #title {
    text-align: left;
    margin: 4rem 0 3rem 2rem;
  }
  .item {
    display: none;
  }
  .item.desktop {
    display: none;
  }
  .active {
    display: block;
    border: none;
  }
  .centered-image {
    width: 100%;
    height: 100%;
  }
  button {
    height: 60px;
    width: 60px;
    margin: 3rem 1rem;
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  .name {
    font-size: 2.5rem;
    margin: 1rem 0;
  }
  .description {
    width: 55%;
    font-size: 1.2rem;
  }
}
</style>
