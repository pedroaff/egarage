<template>
  <div>
    <h1 align="left">Cadastrar veículo</h1>
    <b-form @submit="onSubmit" @submit.stop.prevent>
    
      <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      label="Placa"
      label-for="input-horizontal"
    >
        <b-form-input v-model="form.placa"></b-form-input>

      </b-form-group>

      <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      label="Marca"
      label-for="input-horizontal"
    >
        <b-form-input v-model="form.marca"></b-form-input>
        
      </b-form-group>

      <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      label="Modelo"
      label-for="input-horizontal"
    >
        <b-form-input v-model="form.modelo"></b-form-input>
        
      </b-form-group>


      <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      label="Ano"
      label-for="input-horizontal"
    >
        <b-form-input v-model="form.ano"></b-form-input>
        
      </b-form-group>

        <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        label="Tipo"
        label-for="input-horizontal"
        >
            <b-form-select v-model="selected" :options="tipos"></b-form-select>
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
          form: {
            placa: '',
            marca: '',
            modelo: '',
            ano: '',
            inativo: 0,
          },
          tipos: [
              { value: "CARRO", text:"Carro" },
              { value: "MOTO", text:"Moto" },
              { value: "CAMINHAO", text:"Caminhão" },
              { value: "ONIBUS", text:"Ônibus" },
          ],
          selected: null,
      }
    },
    computed: {
      validation() {
        return this.form.placa.length > 4 && this.form.placa.length < 13
      }
    },
    methods: {
        onSubmit() {
            let formData = JSON.stringify(this.form, this.selected)
            console.log(this.formData)
            axios.post('http://localhost:8080/veiculos', {
                placa: this.form.placa,
                marca: this.form.marca,
                modelo: this.form.modelo,
                ano: this.form.ano,
                tipo: this.selected,
                inativo: this.inativo
            }).then(function (response) {
                console.log(response)
            }).catch(function (error) {
                console.log(error)
            })
        } 
    },
    mounted() {
      console.log('ai meu cu')
    }
  }
</script>