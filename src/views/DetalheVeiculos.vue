<template>
    <div>
        <h1 align="left">Detalhes do veículo</h1>
        <table class="table table-sm table-striped">
          <tbody>
            <tr>
              <td>Id </td>
              <td>{{ this.veiculo.id }}</td>
            </tr>
            <tr>
              <td>Placa </td>
              <td>{{ this.veiculo.placa }}</td>
            </tr>
            <tr>
              <td>Marca </td>
              <td>{{ this.veiculo.marca }}</td>
            </tr>
            <tr>
              <td>Modelo </td>
              <td>{{ this.veiculo.modelo }}</td>
            </tr>
            <tr>
              <td>Ano </td>
              <td>{{ this.veiculo.ano }}</td>
            </tr>
            <tr>
              <td>Tipo </td>
              <td>{{ this.veiculo.tipo }}</td>
            </tr>

          </tbody>
        </table>
        <router-link :to="`/veiculos/`">
          <b-button class="float-left mr-2" variant="primary" size="sm">
                Voltar
          </b-button>
        </router-link>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      params: {},
      veiculo: {}
    }
  },
  created () {
      this.params = this.$route.params
  },
  mounted () {
    console.log(this.params)
    axios.get('http://localhost:8080/veiculos/' + this.params.id ).then(result => {
      this.veiculo = result.data
      console.log(this.veiculo)
      console.log(this.params.id)
      console.log('foi fdp')
    }, error => {
      console.log(this.params.id)
      console.error(error)
    })
  }
}
</script>