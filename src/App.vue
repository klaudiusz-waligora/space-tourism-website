<template>
  <Nav />
  <router-view />
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  components: {
    Nav,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500&family=Barlow:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Barlow&family=Bellefair&display=swap");
</style>
