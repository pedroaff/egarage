<template>
    <div>
      <div class="container py-5">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="text-center text-white mb-4">Bootstrap 4 Login Form</h2>
                    <div class="row">
                        <div class="col-md-6 mx-auto">

                            <!-- form card login -->
                            <div class="card rounded-0">
                                <div class="card-header">
                                    <h3 class="mb-0">Login</h3>
                                </div>
                                <div class="card-body">
                                    <b-form 
                                        @submit.prevent="onSubmit" 
                                        :disabled="$v.form.$invalid">

                                        <b-form-group
                                        id="fieldset-horizontal"
                                        label-cols-sm="4"
                                        label-cols-lg="3"
                                        label="Email"
                                        label-for="input-horizontal">

                                            <b-form-input 
                                            v-model.lazy="$v.form.email.$model"
                                            :class="{ 'is-invalid': $v.form.email.$error }">
                                            </b-form-input>

                                            <div 
                                                v-if="!$v.form.email.required" 
                                                class="invalid-feedback">
                                                O email é obrigatório
                                            </div>

                                        </b-form-group>

                                        <b-form-group
                                        id="fieldset-horizontal"
                                        label-cols-sm="4"
                                        label-cols-lg="3"
                                        label="Senha"
                                        label-for="input-horizontal">

                                            <b-form-input 
                                            v-model.lazy="$v.form.senha.$model"
                                            :class="{ 'is-invalid': $v.form.senha.$error }">
                                            </b-form-input>

                                            <div 
                                            v-if="!$v.form.senha.required" 
                                            class="invalid-feedback">
                                                Campo obrigatório
                                            </div>

                                           

                                        </b-form-group>
                                        
                                        <b-button 
                                            class="float-left m-3" 
                                            type="submit" 
                                            :disabled="$v.form.$invalid" 
                                            variant="primary">
                                            Entrar
                                        </b-button>

                                    </b-form>

                                     <div v-if="wrong">
                                        Verifique suas credenciais
                                    </div>

                                </div>
                                <!--/card-block-->
                            </div>
                            <!-- /form card login -->

                        </div>


                    </div>
                    <!--/row-->

                </div>
                <!--/col-->
            </div>
            <!--/row-->
        </div>
    </div> 
</template>

<script>
import axios from 'axios'
import { required, email, minLength, sameAs, maxLength } from "vuelidate/lib/validators"

export default {
    data() {
        return {
            form: {
                email: '',
                senha: '',
            },
            wrong: '',
        }
    },
    validations: {
        form: {
            email: { required },
            senha: { required },
        }
    },
    methods: {
        onSubmit() {
            axios
                 .post('http://localhost:8080/login', {
                     email: this.form.email,
                     senha: this.form.senha
                 })
                 .then(res => {
                    window.location.href = "http://localhost:8081/veiculos"
                 })
                 .catch(err => {
                     this.wrong = true
                 })
        }
    }
}
</script>

<style>
.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
}
</style>