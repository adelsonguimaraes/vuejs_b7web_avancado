<template>
  <div>
    <h1>Filmes em cartaz</h1>

    <hr>

    <div class="lista">
      <ul>
        <li class="card" v-for="filme in filmes" :key="filme.titulo">
          <img :src="filme.avatar">
          <p>{{filme.titulo}}</p>
        </li>
      </ul>
    </div>
   

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        filmes: []
      }
    },
    mounted() {
      axios
        .get('https://api.b7web.com.br/cinema/')
        .then((json)=>{
          this.filmes = json.data;
        });
    }
  }
</script>

<style>
  .lista {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
  }
  .card {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
  .card > img {
    width: 160px;
  }
</style>