<template>
  <div id="container">
    <h2 id="title"><span>02</span>meet your crew</h2>

    <div id="crew-wrapper">
      <div id="image-container">
        <img
          v-for="person in content.crew"
          class="person"
          :key="person.name"
          :class="{ active: activePerson === person.name }"
          :src="
            require(`../assets/crew/image-${person.name.toLowerCase()}.png`)
          "
        />
        <div id="separator"></div>
      </div>
      <div id="button-container">
        <button
          @click="togglePerson(person.name)"
          class="next-person-btn"
          type="button"
          :key="person.name"
          v-for="person in content.crew"
          :class="{ activeBtn: activePerson === person.name }"
        >
          {{ person.name }}
        </button>
      </div>

      <!-- TEXT CONTENT -->
      <div id="text-content-wrapper">
        <div
          id="role"
          v-for="person in content.crew"
          class="person role"
          :key="person.name"
          :class="{ active: activePerson === person.name }"
        >
          <h2>{{ person.role }}</h2>
        </div>
        <div
          id="name"
          class="person crew-name"
          v-for="person in content.crew"
          :key="person.name"
          :class="{ active: activePerson === person.name }"
        >
          <h1>
            {{ person.name }}
          </h1>
        </div>
        <div
          id="bio"
          class="person bio"
          v-for="person in content.crew"
          :key="person.name"
          :class="{ active: activePerson === person.name }"
        >
          <p>
            {{ person.bio }}
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
      activePerson: "Douglas Hurley",
      currentIndex: 0,
    };
  },
  mounted() {
    this.startIteration();
  },
  methods: {
    togglePerson(personName) {
      this.activePerson = personName;
      this.currentIndex = this.content.crew.findIndex(
        (person) => person.name === personName
      );
    },
    startIteration() {
      this.updatePerson();
      setInterval(() => {
        this.updatePerson();
      }, 4000);
    },
    updatePerson() {
      this.activePerson = this.content.crew[this.currentIndex].name;
      this.currentIndex = (this.currentIndex + 1) % this.content.crew.length;
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
  background-image: url("../assets/crew/background-crew-desktop.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
}

.person {
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

#role {
  font-family: "Bellefair";
  font-size: 1rem;
  text-transform: uppercase;
  color: white;
  opacity: 0.4;
}

#name {
  font-family: "bellefair";
  color: white;
  font-size: 1rem;
  text-transform: uppercase;
  margin: 1rem 0;
}

#bio {
  color: #d0d6f9;
  font-family: "bellefair";
  font-size: 1rem;
}

.next-person-btn {
  opacity: 0.17;
  font-size: 0;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
  border: none;
}
.activeBtn {
  opacity: 1;
  width: 15px;
  height: 15px;
  background: #ffffff;
}
.next-person-btn::hover {
  opacity: 0.5;
}
@media (min-width: 65.1em) {
  #container {
    margin-top: 2rem;
    display: flex;
    width: 100vw;
  }
  #crew-wrapper {
    width: 100vw !important;
    margin: 0 5rem;
    display: flex;
    flex-direction: row-reverse;
  }
  #button-container {
    position: absolute;
    left: 10%;
    top: 65%;
  }

  #text-content-wrapper {
    margin-top: 10rem;
    width: 50%;
    position: absolute;
    left: 10%;
  }
  img {
    position: absolute;
    bottom: 0;
    right: 5%;
  }
  #role {
    font-size: 2rem;
  }
  #name {
    width: 800px;
    font-size: 1.7rem;
  }
  #bio {
    width: 80%;
    font-size: 1.3rem;
    line-height: 1.5;
  }

  #title {
    position: absolute;
    left: 10%;
    top: 20%;
  }
}

@media (max-width: 35em) {
  #container:before {
    background-image: url("../assets/crew/background-crew-mobile.jpg");
  }
  #container {
    text-align: center;
  }
  #crew-wrapper {
    display: flex;
    flex-direction: column;
  }
  #title {
    font-size: 1rem;
  }
  #image-container {
    position: relative;
    height: 300px;
  }
  #crew-wrapper img {
    width: 50%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
  }
  #separator {
    height: 2px;
    width: 80%;
    margin: 0 auto;
    background-color: #383b4b;
    position: relative;
    top: 100%;
  }
  #button-container {
    margin: 2rem 0;
  }
  #role {
    font-size: 1rem;
  }
  #name {
    font-size: 1rem;
    margin: 1rem 0;
  }
  #bio {
    font-size: 1rem;
    margin: 0 auto;
    width: 85%;
  }
}
@media (min-width: 35.001em) and (max-width: 65em) {
  #container:before {
    background-image: url("../assets/crew/background-crew-tablet.jpg");
  }
  #title {
    text-align: left;
    margin: 4rem 0 3rem 2rem;
  }
  #crew-wrapper {
    display: flex;
    flex-direction: column-reverse;
  }

  #role {
    font-size: 1.2rem;
  }
  #name {
    font-size: 1.5rem;
  }
  #bio {
    font-size: 1.3rem;
    width: 70%;
    height: 100px;
    margin: 0 auto;
    line-height: 1.5;
    position: relative;
    margin-bottom: 1rem;
  }

  button {
    margin: 2rem 0;
  }
  #crew-wrapper img {
    margin: 0 auto;
    max-width: 40%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
  }
}
</style>
