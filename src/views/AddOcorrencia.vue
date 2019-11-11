<template>
  <div>
    <h1>Locar veículo</h1>
    <b-form @submit.prevent="onSubmit" :disabled="$v.form.$invalid">
    
      <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          label="Veículos"
          label-for="input-horizontal">

          <select v-model='selectedVeiculo' @change="onChangeVeiculo($event)" class='form-control'>
              <option 
              :key="veiculo.id" 
              v-for='veiculo in veiculos' 
              :value='veiculo.id'>
                {{ veiculo.marca }} : {{veiculo.placa}}
              </option>
          </select>

        </b-form-group>

        <b-form-group
            id="fieldset-horizontal"
            label-cols-sm="4"
            label-cols-lg="3"
            label="Usuário"
            label-for="input-horizontal">

            <select class='form-control' @change="onChangeUsuario($event)" v-model='selectedCliente'>
                <option 
                :key="cliente.id" 
                v-for='cliente in clientes'
                v-if="cliente.tipo === 'CLIENTE'"
                :value='cliente.id'
                >
                  {{ cliente.nome }}
                </option>
            </select>

        </b-form-group>
        
        <b-button 
          class="float-left m-3" 
          type="submit" 
          variant="primary"
          :disabled="$v.form.$invalid">
          Alugar
        </b-button>

        <!-- se precisar colocar de novo o botão de aluguel, é fazer a validação se form.titulo == aluguel
        <b-button 
          v-else
          class="float-left m-3" 
          @click="onRegister" 
          variant="primary"
          :disabled="$v.form.$invalid">
          Registrar
        </b-button> -->

     </b-form>

     <router-link :to="`/ocorrencias/`">
          <b-button class="float-left mr-2 m-3" variant="danger">
                Voltar
          </b-button>
      </router-link>
  </div>
</template>

<script>
import axios from 'axios'
import { required, email, minLength, sameAs, maxLength } from "vuelidate/lib/validators";
import {mask} from 'vue-the-mask'

  export default {
    data() {
      return {
          veiculos: [],
          clientes: [],
          form: {
            titulo: 'Aluguel',
            descricao: 'locação de veículo',
            inicio: '',
            fim: '',
            veiculo_id: '',
            usuario_id: '',
            id: ""
          },
          selectedVeiculo: null,
          selectedCliente: null,
          user: null,
          veiculo: null,
          aluguel: true,
      }
    },
    validations: {
      form: {
        titulo: { required },
        descricao: { required }
      }
    },
    directives: {mask},
    mounted () {

       let usuarios = "http://localhost:8080/usuarios"
       let usuario = "http://localhost:8080/usuarios/"
       let veiculos = "http://localhost:8080/veiculos"
       let veiculo = "http://localhost:8080/veiculos/"

       axios
            .get(usuarios)
            .then(res => {
              this.clientes = res.data
              console.log(res.data[4].tipo)
              return axios.get(usuario + res.data[0].id)
            })
            .then(res => {
              this.user = res.data
              this.selectedCliente = this.user.id
            })
      
      axios
           .get(veiculos)
           .then(res => {
             this.veiculos = res.data
             return axios.get(veiculo + res.data[0].id)
           })
           .then(res => {
             this.veiculo = res.data
             this.selectedVeiculo = this.veiculo.id
           })
    
    },
    methods: {
        onSubmit() {
          let usuario = "http://localhost:8080/usuarios/"
          let veiculo = "http://localhost:8080/veiculos/"
          let ocorrencia = "http://localhost:8080/ocorrencias"

          axios
               .get(usuario + this.selectedCliente)
               .then(res => {
                this.user = res.data 
                return axios.get(veiculo + this.selectedVeiculo)
               })
               .then(res => {
                 this.veiculo = res.data
                 return axios.post(ocorrencia, {
                    titulo: this.form.titulo,
                    descricao: this.form.descricao,
                    fim: this.form.fim,
                    veiculo: this.veiculo,
                    usuario: this.user,
                    id: ""
                 })
               })
               .then(res => {
                 return axios.delete(veiculo + this.selectedVeiculo, {
                   id: this.selectedVeiculo
                 })
               }) 
               .then(res => {
                 window.location.href = "http://localhost:8081/ocorrencias"
               })
               .catch(error => {
                 console.log(error)
               })
        },
        onChangeVeiculo() {
          this.selectedVeiculo = event.target.value
        },
        onChangeUsuario() {
          this.selectedCliente = event.target.value
        },
        onRegister() {
          let usuario = "http://localhost:8080/usuarios/"
          let veiculo = "http://localhost:8080/veiculos/"
          let ocorrencia = "http://localhost:8080/ocorrencias"

          axios
               .get(usuario + this.selectedCliente)
               .then(res => {
                this.user = res.data 
                return axios.get(veiculo + this.selectedVeiculo)
               })
               .then(res => {
                 this.veiculo = res.data
                 return axios.post(ocorrencia, {
                    titulo: this.form.titulo,
                    descricao: this.form.descricao,
                    fim: this.form.fim,
                    veiculo: this.veiculo,
                    usuario: this.user,
                    id: ""
                 })
               })
               .then(res => {
                 window.location.href = "http://localhost:8081/ocorrencias"
               })
               .catch(error => {
                 console.log(error)
               })
        }
    }
  }
</script>
