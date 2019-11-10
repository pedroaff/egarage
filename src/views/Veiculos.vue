<template>
  <div>
    <h1>Lista de veículos disponíveis</h1>
    <div class="overflow-auto">
        

        <b-table 
          striped hover 
          id="my-table"
          :items="veiculos" 
          :fields="fields" 
          :perPage="perPage"
          :current-page="currentPage"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          >

          <template v-slot:cell(actions)="data">
            <router-link :to="`/veiculos/${data.item.id}`">
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
          <router-link to="/criar/veiculo/">
              <b-button class="float-left" variant="primary">Criar veículo</b-button>
          </router-link>
      </div>
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
          key: 'placa',
          sortable: true
        },
        {
          key: 'ano',
          sortable: true
        },
        {
          key: 'marca',
          sortable: true
        },
        {
          key: 'modelo',
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
      veiculos: [],
      perPage: 10,
      sortBy: 'id',
      sortDesc: true,
      currentPage: 1,
    }
  },
  computed: {
    rows() {
      return this.veiculos.length
    }
  },
  mounted () {
    this.veiculos = this.getVehicles()
  },
  methods: {
      onRemove(id) {
        axios.delete('http://localhost:8080/veiculos/' + id).then(result => {
        this.veiculos = result.data
        this.getVehicles()
      }, error => {
        console.error(error)
      })
    },
    getVehicles() {
      axios.get('http://localhost:8080/veiculos').then(result => {
      this.veiculos = result.data
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