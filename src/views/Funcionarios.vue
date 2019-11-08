<template>
  <div>
        <b-table striped hover :items="usuarios" :fields="fields">
          <template slot="nome" slot-scope="data">
            <router-link :to="`/perfil/funcionarios/${data.item.id}`">
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
    axios({ method: 'GET', 'url': 'http://localhost:8080/usuarios' }).then(result => {
      this.usuarios = result.data
      console.log('foi')
    }, error => {
      console.error(error)
    })
  }
}
</script>
