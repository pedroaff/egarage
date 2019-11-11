<template>
    <div>
        <h1 align="left">Detalhes da ocorrência</h1>
        <table class="table table-sm table-striped">
          <thead>
            <tr>
              <th>Informações gerais</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Id </td>
              <td>{{ this.ocorrencia.id }}</td>
            </tr>
            <tr>
              <td>Título </td>
              <td>{{ this.ocorrencia.titulo }}</td>
            </tr>
            <tr>
              <td>Descrição </td>
              <td>{{ this.ocorrencia.descricao }}</td>
            </tr>
            <tr>
              <td>Início </td>
              <td>{{ this.ocorrencia.inicio }}</td>
            </tr>
            <tr>
              <td>Está ativa?</td>
              <td v-if="this.ocorrencia.fim">Concluída</td>
              <td v-else>Em andamento</td>
            </tr>
          </tbody>
        </table>

        <table class="table table-sm table-striped">
          <thead>
            <tr>
              <th>Veículo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Id </td>
              <td>{{ this.ocorrencia.veiculo.id }}</td>
            </tr>
            <tr>
              <td>Placa </td>
              <td>{{ this.ocorrencia.veiculo.placa }}</td>
            </tr>
            <tr>
              <td>Marca </td>
              <td>{{ this.ocorrencia.veiculo.marca }}</td>
            </tr>
            <tr>
              <td>Ano </td>
              <td>{{ this.ocorrencia.veiculo.ano }}</td>
            </tr>
            <tr>
              <td>Modelo </td>
              <td>{{ this.ocorrencia.veiculo.modelo }}</td>
            </tr>
            <tr>
              <td>Tipo </td>
              <td>{{ this.ocorrencia.veiculo.tipo }}</td>
            </tr>
          </tbody>
        </table>

        <table class="table table-sm table-striped">
          <thead>
            <tr>
              <th>Usuário</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Id </td>
              <td>{{ this.ocorrencia.usuario.id }}</td>
            </tr>
            <tr>
              <td>Nome </td>
              <td>{{ this.ocorrencia.usuario.nome }}</td>
            </tr>
            <tr>
              <td>Email </td>
              <td>{{ this.ocorrencia.usuario.email }}</td>
            </tr>
            <tr>
              <td>Telefone </td>
              <td>{{ this.ocorrencia.usuario.telefone }}</td>
            </tr>
            <tr>
              <td>Cpf </td>
              <td>{{ this.ocorrencia.usuario.cpf }}</td>
            </tr>
          </tbody>
        </table>

        <router-link :to="`/ocorrencias/`">
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
<style scoped>

th {
  min-width: 300px
}

</style>