<template>
  <div>
    <h2>Pokémon desde API</h2>

    <div v-if="loading">Cargando...</div>
    <div v-else-if="error">Error: {{ error }}</div>

    <div class="grid">
      <div v-for="poke in pokemons" :key="poke.name" class="card">
        <img :src="poke.image" :alt="poke.name" />
        <h3>{{ poke.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Pokemon",
  data() {
    return {
      pokemons: [],
      loading: true,
      error: null,
    };
  },
  async mounted() {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10");
      const results = response.data.results;

      // Para cada pokémon, traemos la imagen desde la URL detallada
      this.pokemons = await Promise.all(
        results.map(async (poke) => {
          const detail = await axios.get(poke.url);
          return {
            name: poke.name,
            image: detail.data.sprites.front_default,
          };
        })
      );
    } catch (err) {
      this.error = err.message;
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.card {
  width: 150px;
  padding: 10px;
  border-radius: 10px;
  background: #f8f8f8;
  box-shadow: 0px 2px 6px rgba(0,0,0,0.2);
  text-align: center;
}
.card img {
  width: 100px;
  height: 100px;
}
</style>


