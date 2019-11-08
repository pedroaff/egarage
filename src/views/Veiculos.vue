<template>
  <div>
        <b-table striped hover :items="veiculos" :fields="fields">
          <template slot="nome" slot-scope="data">
            <router-link :to="`/veiculos/${data.item.id}`">
              {{ data.value }}
            </router-link>
          </template>
        </b-table>
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
    axios({ method: 'GET', 'url': 'http://localhost:8080/veiculos' }).then(result => {
      this.veiculos = result.data
      console.log('foi')
    }, error => {
      console.error(error)
    })
  }
}
</script>
