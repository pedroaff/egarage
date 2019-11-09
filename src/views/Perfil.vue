<template>
    <div>
        <h1 align="left">Perfil</h1>
        <br>
        <table class="table table-sm table-striped">
          <tbody>
            <tr>
              <td>Id </td>
              <td>{{ this.usuario.id }}</td>
            </tr>
            <tr>
              <td>Nome </td>
              <td>{{ this.usuario.nome }}</td>
            </tr>
            <tr>
              <td>Telefone </td>
              <td>{{ this.usuario.telefone }}</td>
            </tr>
            <tr>
              <td>Cpf </td>
              <td>{{ this.usuario.cpf }}</td>
            </tr>
            <tr>
              <td>CEP </td>
              <td>{{ this.usuario.cep }}</td>
            </tr>
            <tr>
              <td>Logradouro </td>
              <td>{{ this.usuario.logradouro }}</td>
            </tr>
            <tr>
              <td>Tipo </td>
              <td>{{ this.usuario.tipo }}</td>
            </tr>
          </tbody>
        </table>
        <router-link :to="`/clientes/`">
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

<style>
  td {
    text-align: left;
  }
  tr td:first-child {
    width: 20%;
  }
</style>