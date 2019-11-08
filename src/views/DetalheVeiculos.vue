<template>
    <div>
        <h1>Detalhes do veículo</h1>
        <p>{{ this.veiculo.id }}</p>
        <p>{{ this.veiculo.placa }}</p>
        <p>{{ this.veiculo.marca }}</p>
        <p>{{ this.veiculo.modelo }}</p>
        <p>{{ this.veiculo.ano }}</p>
        <p>{{ this.veiculo.tipo }}</p>
        <p>{{ this.veiculo.inativo }}</p>
        <p></p>
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
      console.log('propertyComputed will update, as this.property is now reactive.')
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