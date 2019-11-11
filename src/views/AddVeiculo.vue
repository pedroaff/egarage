<template>
  <div>
    <h1>Cadastrar veículo</h1>
    <b-form @submit.prevent="onSubmit" :disabled="$v.form.$invalid">
    
      <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      label="Placa"
      label-for="input-horizontal"
    >
        <b-form-input 
        v-mask="'AAA-####'" 
        v-model="$v.form.placa.$model"
        :class="{ 'is-invalid': $v.form.placa.$error }">
        </b-form-input>

        <div 
            v-if="!$v.form.placa.required" 
            class="invalid-feedback">
            A placa é obrigatória
          </div>

        <div 
          v-if="!$v.form.placa.minLength" 
          class="invalid-feedback">
          Número inválido de caracteres
        </div>

        <div 
          v-if="existent" 
          class="invalid-feedback">
            Placa já cadastrada no sistema
        </div>
        
      </b-form-group>

      <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      label="Marca"
      label-for="input-horizontal"
    >
        <b-form-input 
        :maxlength="15"
        v-model.lazy="$v.form.marca.$model"
        :class="{ 'is-invalid': $v.form.marca.$error }">
        </b-form-input>
        
        <div 
            v-if="!$v.form.marca.minLength" 
            class="invalid-feedback">

            A marca precisa de mais caracteres
          </div>

        <div 
          v-if="!$v.form.marca.required" 
          class="invalid-feedback">
          A marca é obrigatória
        </div>

      </b-form-group>

      <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      label="Modelo"
      label-for="input-horizontal"
    >
        <b-form-input 
        :maxlength="15"
        v-model.lazy="$v.form.modelo.$model"
        :class="{ 'is-invalid': $v.form.modelo.$error }"
        >
        </b-form-input>
        
        <div 
            v-if="!$v.form.modelo.minLength" 
            class="invalid-feedback">

            O modelo precisa mais caracteres
        </div>

        <div 
          v-if="!$v.form.modelo.required" 
          class="invalid-feedback">
          O modelo é obrigatório
        </div>

      </b-form-group>


      <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      label="Ano"
      label-for="input-horizontal"
    >
        <b-form-input 
        v-mask="'####'"
        v-model.lazy="$v.form.ano.$model"
        :class="{ 'is-invalid': $v.form.ano.$error }">
        </b-form-input>
        
        <div 
            v-if="!$v.form.ano.minLength" 
            class="invalid-feedback">

            O ano precisa ter mais caracteres
        </div>

        <div 
          v-if="!$v.form.ano.required" 
          class="invalid-feedback">
          O ano é obrigatório
        </div>
        
      </b-form-group>

        <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        label="Tipo"
        label-for="input-horizontal"
        >
            <b-form-select 
            v-model="selected" 
            :options="tipos">
            
            </b-form-select>
        </b-form-group>

        <b-button 
        :disabled="$v.form.$invalid" 
        class="float-left m-3" 
        type="submit" 
        variant="primary">Salvar</b-button>
     </b-form>

     <router-link :to="`/veiculos/`">
          <b-button class="float-left mr-2 m-3" variant="danger">
                Voltar
          </b-button>
      </router-link>

  </div>
</template>

<script>
import axios from 'axios'
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import {mask} from 'vue-the-mask'

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
          selected: "CARRO",
          existent: false,
      }
    },
    validations: {
      form: {
        placa: { required, minLength: minLength(8) },
        marca: { required, minLength: minLength(3) },
        modelo: { required, minLength: minLength(3) },
        ano: { required, minLength: minLength(4) }
      }
    },
    directives: {mask},
    methods: {
        onSubmit() {
           
            axios
                .post('http://localhost:8080/veiculos', {
                    placa: this.form.placa,
                    marca: this.form.marca,
                    modelo: this.form.modelo,
                    ano: this.form.ano,
                    tipo: this.selected,
                    inativo: this.inativo
                }).then((response) => {
                  window.location.href = "http://localhost:8081/veiculos"
                }).catch((error) => {
                    this.form.placa = "";
                    return this.existent = true;
                })
        } 
    }
  }
</script>