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
          <template slot="id" slot-scope="data">
            <router-link :to="`detalhes/veiculos/${data.item.id}`">
              {{ data.value }}
            </router-link>
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
          <router-link to="/veiculos/criar">
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
        }
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
    axios.get('http://localhost:8080/veiculos').then(result => {
      this.veiculos = result.data
      console.log('foi')
    }, error => {
      console.error(error)
    })
  }
}
</script>
