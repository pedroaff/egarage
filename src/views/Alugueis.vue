<template>
  <div>
    <h1> Lista de Aluguéis</h1>
        <b-table striped hover 
        :items="alugueis" 
        :fields="fields"
        :perPage="perPage"
        :current-page="currentPage"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        >

        <template v-slot:cell(usuario)="data">
            {{data.item.usuario.nome}}
        </template>

        <template v-slot:cell(veiculo)="data">
            {{data.item.veiculo.modelo}}
        </template>

        <template v-slot:cell(placa)="data">
            {{data.item.veiculo.placa}} 
        </template>

        <template v-slot:cell(status)="data">

          <b v-if="data.item.fim" class="text-success">
            Devolvido
          </b>
          
          <b v-if="!data.item.fim" class="text-warning">
            Em uso
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
            variant="warning" 
            @click="onClose(data.item.id)" 
            size="sm" 
            class="mr-2">
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
        <router-link to="/criar/ocorrencias/">
            <b-button class="float-left" variant="primary">Registrar locação</b-button>
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
          key: 'veiculo',
          sortable: true
        },
        {
          key: 'usuario',
          sortable: true,
        },
        {
          key: 'placa',
          sortable: true,
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
      return this.alugueis.length
    },
    alugueis() {
        var alugueis = this.ocorrencias.filter(function (e) {
            if(e.titulo == 'Aluguel')
                return e
        })

        console.log('testando', alugueis)
        return alugueis
    }
  },
  mounted () {
    axios.get('http://localhost:8080/ocorrencias').then(result => {
      this.ocorrencias = result.data
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
               return axios.put(veiculo + liberarVeiculo.id, {...liberarVeiculo, inativo:false})
             })
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