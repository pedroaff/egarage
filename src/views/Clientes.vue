<template>
  <div>
        <b-table striped hover :items="usuarios" :fields="fields">
          <template slot="nome" slot-scope="data">
            <router-link :to="`/perfil/clientes/${data.item.id}`">
              {{ data.value }}
            </router-link>
          </template>
        </b-table>
    <div>
        <router-link to="/clientes/criar">
            <b-button class="float-left" variant="primary">Criar cliente</b-button>
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
