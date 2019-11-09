<template>
  <div>
    <b-form @submit="onSubmit" @submit.stop.prevent>
    
      <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      label="Título"
      label-for="input-horizontal"
    >
        <b-form-input v-model="form.titulo"></b-form-input>

      </b-form-group>

      <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      label="Descrição"
      label-for="input-horizontal"
    >
        <b-form-textarea 
        id="textarea"
        placeholder="Descreva a ocorrência..."
        rows="3"
        max-rows="6"
        v-model="form.descricao">
        </b-form-textarea>
        
      </b-form-group>

      <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      label="Início"
      label-for="input-horizontal"
    >
        <b-form-input type="date" v-model="form.inicio"></b-form-input>
        
      </b-form-group>


      <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      label="Fim"
      label-for="input-horizontal"
    >
        <b-form-input type="date" v-model="form.fim"></b-form-input>
        
      </b-form-group>

        <b-form-group
            id="fieldset-horizontal"
            label-cols-sm="4"
            label-cols-lg="3"
            label="Veículos"
            label-for="input-horizontal"
        >
            <select v-model='selectedVeiculo' class='form-control'>
                <option value='0' >Selecione um veículo</option>
                <option :key="veiculo.id" v-for='veiculo in veiculos' :value='veiculo.id'>{{ veiculo.marca }}</option>
            </select>
        </b-form-group>

        <b-form-group
            id="fieldset-horizontal"
            label-cols-sm="4"
            label-cols-lg="3"
            label="Usuário"
            label-for="input-horizontal"
        >
            <select class='form-control' v-model='selectedCliente'>
                <option value='0' >Selecione um cliente</option>
                <option :key="cliente.id" v-for='cliente in clientes' :value='cliente.id'>{{ cliente.nome }}</option>
            </select>
        </b-form-group>
        

        <b-button class="float-left" type="submit" variant="primary">Salvar</b-button>
     </b-form>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    data() {
      return {
          veiculos: [],
          clientes: [],
          form: {
            titulo: '',
            descricao: '',
            inicio: '',
            fim: '',
            veiculo_id: '',
            usuario_id: '',
            id: ""
          },
          selectedVeiculo: null,
          selectedCliente: null,
      }
    },
    computed: {
      validation() {
        return this.form.titulo.length > 4 && this.form.titulo.length < 13
      }
    },
    mounted () {
        axios({ method: 'GET', 'url': 'http://localhost:8080/veiculos' }).then(result => {
        this.veiculos = result.data
        console.log(this.veiculos)
        }, error => {
        console.error(error)
        })

        axios({ method: 'GET', 'url': 'http://localhost:8080/usuarios' }).then(result => {
        this.clientes = result.data
        console.log(this.clientes)
        }, error => {
        console.error(error)
        })
    },
    methods: {
        onSubmit() {
            console.log(this.selectedVeiculo, this.selectedCliente)
            let formData = JSON.stringify(this.form, this.selectedCliente)

            // fetch('http://localhost:8080/ocorrencia', {
            //     method: 'POST',
            //     headers: new Headers({
            //         "Content-Type": "application/json",
            //     }),
            //     body:JSON.stringify({
            //         titulo: this.form.titulo,
            //         descricao: this.form.descricao,
            //         fim: this.form.fim,
            //         veiculo_id: this.selectedVeiculo,
            //         usuario_id: this.selectedCliente,
            //         id: ""})
            //     })
            //     .then((resp) => console.log(resp))
            //     .catch((err) => console.log(err))
            // }
            axios.post('http://localhost:8080/ocorrencia', {
                titulo: this.form.titulo,
                descricao: this.form.descricao,
                fim: this.form.fim,
                veiculo_id: this.selectedVeiculo,
                usuario_id: this.selectedCliente,
                id: ""
            }).then(function (response) {
                console.log(response.data)
            }).catch(function (error) {
                console.log(error)
            })
        }
    }
  }
</script>
