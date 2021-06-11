<template>
  <div >
    <h1>Preço do Bitcoin</h1>

    Preço atual do Bitcoin: <br>

    <div v-if="loading">Carregando..</div>

    <div v-if="error">Desculpe, não podemos pegar a informação no momento. 
      Tente novamente mais tarde.</div>

    <div v-else>US$ {{ bitcoin_price }}</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      bitcoin_price:0,
      error: false,
      loading:true
    }
  },
  mounted() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json2')
      .then((r)=>{
        this.bitcoin_price = r.data.bpi.USD.rate_float;
      })
      .catch(() =>{
        this.error = true;
      })
      .finally(()=>{
        this.loading = false;
      })
  }
}
</script>
