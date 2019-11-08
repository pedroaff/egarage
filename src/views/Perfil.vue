<template>
    <div>
        <h1>Perfil</h1>
        <p>{{ this.usuario.id }}</p>
        <p>{{ this.usuario.nome }}</p>
        <p>{{ this.usuario.cep }}</p>
        <p>{{ this.usuario.cpf }}</p>
        <p>{{ this.usuario.telefone }}</p>
        <p>{{ this.usuario.logradouro }}</p>
        <p>{{ this.usuario.complemento }}</p>
        <p>{{ this.usuario.cep }}</p>
        <p>{{ this.usuario.tipo }}</p>
        <p></p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      params: {},
      usuario: {}
    }
  },
  created () {
      this.params = this.$route.params
  },
  mounted () {
    axios.get('http://localhost:8080/usuarios/' + this.params.id).then(result => {
      this.usuario = result.data
      console.log(this.usuario)
      console.log(this.params.id)
      console.log('foi')
    }, error => {
      console.log(this.params.id)
      console.error(error)
    })
  }
}
</script>