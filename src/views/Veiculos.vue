<template>
  <div>
        <b-table striped hover :items="veiculos" :fields="fields">
          <template slot="id" slot-scope="data">
            <router-link :to="`detalhes/veiculos/${data.item.id}`">
              {{ data.value }}
            </router-link>
          </template>
        </b-table>
    <div>
        <router-link to="/veiculos/criar">
            <b-button class="float-left" variant="primary">Criar veículo</b-button>
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
      veiculos: []
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
