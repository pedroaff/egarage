<template>
  <div>
    <h1>Usuários do sistema</h1>
        <b-table 
        striped hover 
        :items="usuarios" 
        :fields="fields"
        :perPage="perPage"
        :current-page="currentPage"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc">

          <template v-slot:cell(actions)="data">
            <router-link :to="`/usuarios/${data.item.id}`">
              <b-button variant="primary" size="sm" class="mr-2">
                Detalhes
              </b-button>
            </router-link>
            <b-button variant="danger" @click="onRemove(data.item.id)" size="sm" class="mr-2">
              Remover
            </b-button>
          </template>

        </b-table>

        <b-pagination
          align="center"
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
    <div>
        <router-link to="/clientes/criar">
            <b-button class="float-left" variant="primary">Criar cliente</b-button>
        </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      fields: [
        {
          key: 'id',
          sortable: true
        },
        {
          key: 'nome',
          sortable: true
        },
        {
          key: 'email',
          sortable: true
        },
        {
          key: 'tipo',
          sortable: true
        },
        { 
          key: 'actions', 
          label: 'Ações' 
        },
      ],
      usuarios: [],
      perPage: 10,
      sortBy: 'id',
      sortDesc: true,
      currentPage: 1,
    }
  },
  computed: {
    rows() {
      return this.usuarios.length
    }
  },
  mounted () {
    this.usuarios = this.getUsers()
  },
  methods: {
    onRemove(id) {
        axios.delete('http://localhost:8080/usuarios/' + id).then(result => {
        this.usuarios = result.data
        this.getUsers()
      }, error => {
        console.error(error)
      })
    },
    getUsers() {
      axios.get('http://localhost:8080/usuarios').then(result => {
      this.usuarios = result.data
      }, error => {
        console.error(error)
      })
    }
  }
}
</script>

<style>
tr td:first-child {
    width: 1%;
}
</style>