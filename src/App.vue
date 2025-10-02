<template>
  <div id="app">
    <h1> API con Vue + Axios + PokeMon</h1>
    <Pokemon />
  </div>
</template>

<script>
import Pokemon from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    Pokemon,
  },
};
</script>

