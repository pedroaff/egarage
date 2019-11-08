<template>
    <div>
        <h1>Detalhes da ocorrência</h1>
        <p>{{ this.ocorrencia.id }}</p>
        <p>{{ this.ocorrencia.titulo }}</p>
        <p>{{ this.ocorrencia.descricao }}</p>
        <p>{{ this.ocorrencia.inicio }}</p>
        <p>{{ this.ocorrencia.fim }}</p>
        <p>{{ this.ocorrencia.veiculo.id }}</p>
        <p>{{ this.ocorrencia.veiculo.placa }}</p>
        <p>{{ this.ocorrencia.veiculo.marca }}</p>
        <p>{{ this.ocorrencia.veiculo.modelo }}</p>
        <p>{{ this.ocorrencia.veiculo.ano }}</p>
        <p>{{ this.ocorrencia.veiculo.tipo }}</p>
        <p>{{ this.ocorrencia.usuario.id }}</p>
        <p>{{ this.ocorrencia.usuario.nome }}</p>
        <p>{{ this.ocorrencia.usuario.email }}</p>
        <p>{{ this.ocorrencia.usuario.telefone }}</p>
        <p>{{ this.ocorrencia.usuario.cpf }}</p>
        <p>{{ this.ocorrencia.usuario.logradouro }}</p>
        <p>{{ this.ocorrencia.usuario.complemento }}</p>
        <p>{{ this.ocorrencia.usuario.cep }}</p>
        <p></p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      params: {},
      ocorrencia: {}
    }
  },
  created () {
      this.params = this.$route.params
      console.log('propertyComputed will update, as this.property is now reactive.')
  },
  mounted () {
    console.log(this.params)
    axios.get('http://localhost:8080/ocorrencias/' + this.params.id ).then(result => {
      this.ocorrencia = result.data
      console.log(this.ocorrencia)
      console.log(this.params.id)
      console.log('foi fdp')
    }, error => {
      console.log(this.params.id)
      console.error(error)
    })
  }
}
</script>