<template>
    <div>
        <h1>Perfil</h1>
        <p>{{ $route.params.tipo }}</p>
        <p>{{ $route.params.id }}</p>
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
          key: 'nome',
          sortable: true
        },
        {
          key: 'email',
          sortable: true
        },
        {
          key: 'tipo',
          sortable: true
        }
      ],
      usuarios: []
    }
  },
  mounted () {
    axios({ method: 'GET', 'url': 'http://localhost:8080/usuarios/' + this.$route.params.id }).then(result => {
      this.usuario = result.data
      console.log(this.usuarios)
      console.log('foi')
    }, error => {
      console.error(error)
    })
  }
}
</script>