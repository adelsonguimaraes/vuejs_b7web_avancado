<template>
  <div>
    <h1>Cadastro de Usuários</h1>

    <hr>

    <template>
      <v-data-table
        :headers="usuarios.headers"
        :items="usuarios.itens"
        :items-per-page="5"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar
            flat
          >
          
            <!-- <v-toolbar-title>My Crud</v-toolbar-title> -->
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <v-dialog
              v-model="dialog"
              max-width="500px"
            >
              <template v-slot:activator="{on, attrs}">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  New Item
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }} </span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.nome"
                          label="Nome"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.salario"
                          label="Salário"
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="12"
                        md="12"
                      >
                        <v-text-field
                          v-model="editedItem.endereco"
                          label="Endereço"
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <!-- buttons -->
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="close"
                  >
                    Cancelar
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="save"
                  >
                    Salvar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5">
                  Deseja realmente deletar este item ?
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm">Deletar</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            class="mr-2"
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn
            color="primary"
            @click="initialize"
          >
            Reset
          </v-btn>
        </template>
      </v-data-table>
    </template>
   

  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialog: false,
        dialogDelete: false,
        editedIndex: -1,
        editedItem: {
          nome: '',
          endereco: '',
          salario: 0
        },
        defaultItem: {
          nome: '',
          endereco: '',
          salario: 0
        },
        usuarios: {
          headers: [
            {
              text: 'Nome',
              align: 'start',
              value: 'nome'
            },
            {
              text: 'Endereço',
              value: 'endereco'
            },
            {
              text: 'Salário',
              value: 'salario'
            },
            {
              text: 'Actions',
              value: 'actions',
              sortable: false
            }
          ],
          itens: []
        }
      }
    },
    
    created () {
      this.initialize();
    },

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      }
    },

    methods: {
      initialize () {
        this.usuarios.itens = [
          {
              nome: 'Adelson Guimarães',
              endereco: 'Rua Nova Olinda 10',
              salario: 2.00
            },
            {
              nome: 'Raquel Araújo',
              endereco: 'Rua Clara Cordeiro 2',
              salario: 5.00
            },
            {
              nome: 'Pipoca Sapeca',
              endereco: 'Rua Nova Olinda 10',
              salario: 1.00
            }
        ];
      },
      close () {
        this.dialog = false;
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defautItem);
          this.editedIndex = -1;
        });
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.usuarios.itens[this.editedIndex], this.editedItem);
        }else{
          this.usuarios.itens.push(this.editedItem);
        }
        this.close();
      },
      editItem (item) {
        this.editedIndex = this.usuarios.itens.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
      },
      closeDelete () {
        this.dialogDelete = false;
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        });
      },
      deleteItem (item) {
        this.editedIndex = this.usuarios.itens.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialogDelete = true;
      },
      deleteItemConfirm () {
        this.usuarios.itens.splice(this.editedIndex, 1);
        this.closeDelete();
      },
    }
  }
</script>

<style>

</style>