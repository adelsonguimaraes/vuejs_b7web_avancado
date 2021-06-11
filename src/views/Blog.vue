<template>
  <div >
    <h1>Blog</h1>

    <br>

    <div>
      <form>
        Título <input type="text" v-model="addTitulo">
        <br><br>
        <textarea v-model="addCorpo"></textarea>
      </form>
      <br> <br>
      <button @click="add">Adicionar</button>
    </div>

    <hr>

    <div v-for="post in posts" :key="post.id" class="post_item">
      <h5>#{{post.id}} - {{ post.title }}</h5>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts:[],
      addTitulo: '',
      addCorpo:''
    }
  },
  methods: {
    add: function () {
        
      axios
        .post('https://jsonplaceholder.typicode.com/posts', {
          userId:1,
          title: this.addTitulo,
          body: this.addCorpo
        })
        .then(json => {
          console.log(json.data);
        })
        .finally(()=>{
          this.addTitulo = '';
          this.addCorpo = '';
        });

    }
  },
  mounted() {
    axios
      .post('https://jsonplaceholder.typicode.com/posts')
      .then((json)=>{
        this.posts = json.data;
      });
  }
}
</script>

<style>
  .post_item {
    border:1px solid #ccc;
    padding: 10px;
    margin: 10px;
    max-width: 400px;
  }
</style>