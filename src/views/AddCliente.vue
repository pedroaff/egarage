<template>
  <div>
    <h1 align="left">Criar novo cliente</h1>
    <br>
    <b-form @submit.prevent="onSubmit" :disabled="$v.form.$invalid">
      <b-col sm="5">
        <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        label="Nome"
        label-for="input-horizontal">

          <b-form-input 
          type="text"
          v-model.lazy="$v.form.nome.$model"
          :class="{ 'is-invalid': $v.form.nome.$error }">
          </b-form-input>
          
          <div 
            v-if="!$v.form.nome.minLength" 
            class="invalid-feedback">

            O nome precisa ter pelo menos 3 caracteres
          </div>

          <div 
            v-if="!$v.form.nome.required" 
            class="invalid-feedback">
            O nome é obrigatório
          </div>

        </b-form-group>
    </b-col>
      <b-col sm="5">
        <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        label="Email"
        label-for="input-horizontal"
      >
          <b-form-input 
          type="email" 
          v-model.lazy="$v.form.email.$model" 
          :class="{ 'is-invalid': $v.form.email.$error }"></b-form-input>

          <div 
            v-if="!$v.form.email.required" 
            class="invalid-feedback">
            O email é obrigatório
          </div>

          <div 
            v-if="!$v.form.email.minLength" 
            class="invalid-feedback">
            Digite mais alguns caracteres
          </div>

          <div 
          v-if="existent" 
          class="invalid-feedback">
            E-mail já cadastrado no sistema. Utilize outro endereço de email
          </div>

        </b-form-group>
      </b-col>
        

      <b-col sm="5">
        <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        label="Senha"
        label-for="input-horizontal">

          <b-form-input 
          type="email "
          :class="{ 'is-invalid': $v.form.senha.$error }" 
          v-model.lazy="$v.form.senha.$model">
          </b-form-input>

          <div 
            v-if="!$v.form.senha.required" 
            class="invalid-feedback">
            A senha é obrigatória
          </div>

          <div 
            v-if="!$v.form.senha.minLength" 
            class="invalid-feedback">
            Digite mais alguns caracteres
          </div>

        </b-form-group>
      </b-col>

      <b-col sm="5">
        <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        label="CPF"
        label-for="input-horizontal">

          <b-form-input 
          v-mask="'###.###.###-##'" 
          v-model.lazy="$v.form.cpf.$model"
          :class="{ 'is-invalid': $v.form.cpf.$error }">
          </b-form-input>
          
          <div 
            v-if="!$v.form.cpf.required" 
            class="invalid-feedback">
            O cpf é obrigatório
          </div>

          <div 
            v-if="!$v.form.cpf.minLength" 
            class="invalid-feedback">
            Número inválido de caracteres
          </div>

        </b-form-group>
      </b-col>

      <b-col sm="5">
        <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        label="Telefone"
        label-for="input-horizontal">

          <b-form-input 
          v-mask="'(##) #####-####'" 
          v-model.lazy="$v.form.telefone.$model"
          :class="{ 'is-invalid': $v.form.telefone.$error }"
          ></b-form-input>
          
          <div 
            v-if="!$v.form.telefone.required" 
            class="invalid-feedback">
            O telefone é obrigatório
          </div>

          <div 
            v-if="!$v.form.telefone.minLength" 
            class="invalid-feedback">
            Número inválido de caracteres
          </div>

        </b-form-group>
      </b-col>

      <b-col sm="5">
        <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        label="CEP"
        label-for="input-horizontal">

          <b-form-input 
          id="cep"
          v-mask="'#####-###'" 
          v-model.lazy="$v.form.cep.$model"
          v-on:keyup="getCep()"
          :class="{ 'is-invalid': $v.form.cep.$error }">
          </b-form-input>
          
          <div 
            v-if="!$v.form.cep.required" 
            class="invalid-feedback">
            O cep é obrigatório
          </div>

          <div 
            v-if="!$v.form.cep.minLength" 
            class="invalid-feedback">
            Número inválido de caracteres
          </div>

        </b-form-group>
      </b-col>

      <b-col sm="5">
        <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        label="Logradouro"
        label-for="input-horizontal">

          <b-form-input v-model="form.logradouro"></b-form-input>
          
        </b-form-group>
      </b-col>

      <b-col sm="5">
        <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        label="Complemento"
        label-for="complemento">

          <b-form-input v-model="form.complemento"></b-form-input>
          
        </b-form-group>
      </b-col>

      <b-button 
        class="float-left m-3" 
        type="submit" 
        :disabled="$v.form.$invalid" 
        variant="primary">Salvar</b-button>

      <router-link :to="`/usuarios/`">
          <b-button class="float-left mr-2 m-3" variant="danger">
                Voltar
          </b-button>
      </router-link>

     </b-form>

  </div>
</template>

<script>
import axios from 'axios'
import {mask} from 'vue-the-mask'
import { required, email, minLength, sameAs, maxLength } from "vuelidate/lib/validators";

  export default {
    data() {
      return {
          form: {
            nome: '',
            email: '',
            cpf: '',
            senha: '',
            telefone: '',
            cep: '',
            logradouro: '',
            complemento: '',
            tipo: 'CLIENTE'
          },
          existent: false,
      }
    },
    validations: {
      form: {
          nome: { required, minLength: minLength(4), maxLength: maxLength(15) },
          email: { required, minLength: minLength(10)},
          cpf: { required, minLength: minLength(14) },
          senha: { required, minLength: minLength(6) },
          telefone: {required, minLength: minLength(14)},
          cep: { required, minLength: minLength(9) }
      },
    },
    directives: {mask},
    computed: {
      validation() {
        return this.form.nome.length > 4 && this.form.nome.length < 13
      }
    },
    methods: {
        onSubmit() {
            axios.post('http://localhost:8080/usuarios', {
                nome: this.form.nome,
                email: this.form.email,
                senha: this.form.senha,
                cpf: this.form.cpf,
                telefone: this.form.telefone,
                cep: this.form.cep,
                logradouro: this.form.logradouro,
                complemento: this.form.complemento,
                tipo: this.form.tipo,
            }).then((response) => {
                window.location.href = "http://localhost:8081/usuarios"
            }).catch((error) => {
                this.form.email = "";
                return this.existent = true;
            })
        },
        getCep() {
          let cep = this.form.cep

          if(!this.$v.form.cep.$error)
            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                .then((response) => {
                  this.form.logradouro = response.data.logradouro
                  this.form.complemento = response.data.complemento
                })
        }
    }
  }
</script>

<style>

</style>