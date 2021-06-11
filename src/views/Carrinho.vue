<template>
  <div>
    <h1>Carrinho de Compras</h1>

    <hr>

    <div class="box">
      <div class="lista">
        <v-card
          class="card"
          max-width="250"
          outlined
          v-for="produto in produtos" :key="produto.nome"
          :disabled="produto.disabled"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">
                {{produto.nome}}
              </div>
              <v-list-item-title class="text-h5 mb-1">
                R$ {{produto.preco}}
              </v-list-item-title>
              <v-list-item-subtitle>Estoque: {{produto.quantidade}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-btn
              outlined
              rounded
              text
              @click="adicionar(produto)"
            >
              Adicionar
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <div class="resultado">
        <h4>Resultado</h4>
        <hr>

        <div class="item" v-for="item in itens" :key="item.nome">
          <p>
            {{item.nome}} <br>
            (Qt:{{item.quantidade}})
          </p>
          <p>R${{item.preco}}</p>
        </div>

        <hr>
        total: R$ {{total}}
      </div>
    </div>
   

  </div>
</template>

<script>
  export default {
    data() {
      return {
        produtos: [
          {
            nome:'Teclado',
            preco: 28.0,
            quantidade: 1,
            disabled: false
          },
          {
            nome:'Mouse',
            preco: 36.0,
            quantidade: 5,
            disabled: false
          },
          {
            nome:'Monitor',
            preco: 299.99,
            quantidade: 3,
            disabled: false
          },
          {
            nome:'CPU',
            preco: 1099.0,
            quantidade: 2,
            disabled: false
          }
        ],
        itens: [],
        total: 0
      }
    },
    methods: {
      adicionar: function (p) {
        if (this.itens.length<=0) {
          this.itens.push({
            nome: p.nome,
            preco: p.preco,
            quantidade: 1
          });
          this.total += p.preco;
        }else{
          let pos = null;
          for (let i in this.itens) {
            if (this.itens[i].nome==p.nome) {
              pos = this.itens[i];
            }
          }
          if (pos!=null) {
            pos.quantidade++;
            this.total += p.preco;
          }else{
            this.itens.push({
              nome: p.nome,
              preco: p.preco,
              quantidade: 1
            });
            this.total += p.preco;
          }
        }
        p.quantidade--;
        if (p.quantidade<=0) p.disabled='disabled';
      }
    }
  }
</script>

<style>
  .box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
  }
  .lista {
    display: flex;
    flex-wrap: wrap;
  }
  .card {
    flex: 1 1 200px;
    margin: 5px;
  }
  .resultado {
    width: 250px;
    padding: 10px;
    border: 2px dotted #ccc;
    background-color: whitesmoke;
  }
  .item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
</style>