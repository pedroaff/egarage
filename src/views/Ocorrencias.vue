<template>
  <div>
        <b-table striped hover :items="veiculos" :fields="fields">
        </b-table>
    <div>
        <router-link to="/ocorrencias/criar">
            <b-button class="float-left" variant="primary">Criar ocorrência</b-button>
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
          key: 'titulo',
          sortable: true
        },
        {
          key: 'inicio',
          sortable: true
        },
        {
          key: 'fim',
          sortable: true
        }
      ],
      veiculos: []
    }
  },
  mounted () {
    axios.get('http://localhost:8080/ocorrencias').then(result => {
      this.veiculos = result.data
      console.log('foi')
    }, error => {
      console.error(error)
    })
  }
}
</script>
