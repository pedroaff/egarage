<template>
  <div>
    <h1> Lista de Ocorrências</h1>
        <b-table striped hover 
        :items="ocurrences" 
        :fields="fields"
        :perPage="perPage"
        :current-page="currentPage"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        >

        <template v-slot:cell(envolvidos)="data">

          <b class="text-info">
            {{data.item.usuario.nome}} com {{data.item.veiculo.placa}}
          </b>

        </template>


        <template v-slot:cell(status)="data">

          <b v-if="data.item.fim" class="text-success">
            Concluída
          </b>
          
          <b v-if="!data.item.fim" class="text-warning">
            Em andamento 
          </b>

        </template>

          <template v-slot:cell(actions)="data">

            <router-link :to="`/ocorrencias/${data.item.id}`">
              <b-button variant="primary" size="sm" class="mr-2">
                Detalhes
              </b-button>
            </router-link>
    
            <b-button 
            :disabled="data.item.fim" 
            variant="success" 
            @click="onResolve(data.item.id)" 
            size="sm" 
            class="mr-2">
                Resolver
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
          key: 'envolvidos',
          sortable: false
        },
        {
          key: 'status',
          sortable: false
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
      return this.ocurrences.length
    },
    ocurrences() {
      var ocurrences = this.ocorrencias.filter(function (e) {
            if(e.titulo != 'aluguel')
                return e
        })

        console.log('testando', ocurrences)
        return ocurrences
    },
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
      let encerrar = 'http://localhost:8080/ocorrencias/encerrar/'
      let ocorrencia = 'http://localhost:8080/ocorrencias/'
      let veiculo = 'http://localhost:8080/veiculos/'
      
      let liberarVeiculo

      axios 
           .get(ocorrencia + id)
           .then(res => {
             liberarVeiculo = res.data.veiculo
             return axios.put(encerrar + res.data.id, 
               res.data,
             )
             .then(res => {
               console.log('pra liberar ', liberarVeiculo)
               return axios.put(veiculo + liberarVeiculo.id, {...liberarVeiculo, inativo:false})
             })
             .then(res => {
               console.log('liberado, ', liberarVeiculo)
               return axios.get(ocorrencia)
             })
             .then(res => {
               this.ocorrencias = res.data
             })
             .catch(err => {
               console.log(err)
             })
           })
    },

    onResolve(id) {
      let encerrar = 'http://localhost:8080/ocorrencias/encerrar/'
      let ocorrencia = 'http://localhost:8080/ocorrencias/'
      let veiculo = 'http://localhost:8080/veiculos/'
      
      let liberarVeiculo
      const inativo = false

      axios 
           .get(ocorrencia + id)
           .then(res => {
             liberarVeiculo = res.data.veiculo
             return axios.put(encerrar + res.data.id, 
               res.data,
             )
             .then(res => {
               return axios.get(ocorrencia)
             })
             .then(res => {
               this.ocorrencias = res.data
             })
             .catch(err => {
               console.log(err)
             })
           })
    }

  }
}
</script>
<style>
tr td:first-child {
    width: 1%;
}
</style>