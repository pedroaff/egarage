<template>
  <div>
    <h1> Lista de Ocorrências</h1>
        <b-table striped hover 
        :items="ocorrencias" 
        :fields="fields"
        :perPage="perPage"
        :current-page="currentPage"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        >

          <template v-slot:cell(actions)="data">
            <router-link :to="`/ocorrencias/${data.item.id}`">
              <b-button variant="primary" size="sm" class="mr-2">
                Detalhes
              </b-button>
            </router-link>
            <b-button variant="warning" @click="onClose(data.item.id)" size="sm" class="mr-2">
              Encerrar
            </b-button>
          </template>

        </b-table>

        <b-pagination
          align="center"
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>

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
        },
        { 
          key: 'actions', 
          label: 'Ações' 
        },
      ],
      ocorrencias: [],
      perPage: 10,
      sortBy: 'id',
      sortDesc: true,
      currentPage: 1,
      ocurrenceEntity: null,
    }
  },
  computed: {
    rows() {
      return this.ocorrencias.length
    }
  },
  mounted () {
    axios.get('http://localhost:8080/ocorrencias').then(result => {
      this.ocorrencias = result.data
      console.log('foi')
    }, error => {
      console.error(error)
    })
  },
  methods: {
    onClose(id) {
        console.log('entrando no onClose')
        this.getOcurrenceEntity(id)
            .then((response) => {
              console.log(response)
              axios.put('http://localhost:8080/ocorrencias/encerrar/' + id, {
                  id: id
                })
            })
            .catch((error) => {
              console.error('deu erro porra')
            })
    },

    getOcurrenceEntity(id) {
      return axios      
            .get('http://localhost:8080/ocorrencias/' + id)
            .then((response) => {
              console.log('dentro do getOcurrenceEntity')
              return JSON.stringify(response.data)
            })
            .catch((error) => {
              console.error('deu erro porra 1')
            })
    }

  }
}
</script>
