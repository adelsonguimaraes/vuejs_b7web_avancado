<template>
  <div>
    <div>{{ip}}</div>  
    <hello-world />
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import axios from 'axios';

  export default {
    name: 'Home',

    components: {
      HelloWorld
    },
    data() {
      return {
        ip: ''
      }
    },
    mounted() {
      axios
        .get('http://ip.jsontest.com')
        .then((r)=>{
          this.ip = r.data.ip;
        });
    }
  }
</script>
