<template>
  <div>
    <b-form @submit="onSubmit" @submit.stop.prevent>
    
      <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      label="Digite o nome"
      label-for="input-horizontal"
    >
        <b-form-input v-model="form.nome"></b-form-input>

      </b-form-group>

      <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      label="Email"
      label-for="input-horizontal"
    >
        <b-form-input v-model="form.email"></b-form-input>
        
      </b-form-group>


      <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      label="Senha"
      label-for="input-horizontal"
    >
        <b-form-input v-model="form.senha"></b-form-input>
        
      </b-form-group>


      <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      label="CPF"
      label-for="input-horizontal"
    >
        <b-form-input v-model="form.cpf"></b-form-input>
        
      </b-form-group>

      <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      label="Telefone"
      label-for="input-horizontal"
    >
        <b-form-input v-model="form.telefone"></b-form-input>
        
      </b-form-group>

      <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      label="CEP"
      label-for="input-horizontal"
    >
        <b-form-input v-model="form.cep"></b-form-input>
        
      </b-form-group>

      <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      label="Logradouro"
      label-for="input-horizontal"
    >
        <b-form-input v-model="form.logradouro"></b-form-input>
        
      </b-form-group>

      <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      label="Complemento"
      label-for="input-horizontal"
    >
        <b-form-input v-model="form.complemento"></b-form-input>
        
      </b-form-group>

      <b-button type="submit" variant="primary">Salvar</b-button>

     </b-form>
  </div>
</template>

<script>
import axios from 'axios'

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
      }
    },
    computed: {
      validation() {
        return this.form.nome.length > 4 && this.form.nome.length < 13
      }
    },
    methods: {
        onSubmit() {
            console.log(JSON.stringify(this.form))

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
            }).then(function (response) {
                console.log(response)
            }).catch(function (error) {
                console.log(error)
            })
        } 
    }
  }
</script>