import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About'
import Funcionarios from './views/Funcionarios'
import Clientes from './views/Clientes'
import Perfil from './views/Perfil'
import Veiculos from './views/Veiculos'
import AddCliente from './views/AddCliente'
import DetalheVeiculos from './views/DetalheVeiculos'
import AddVeiculo from './views/AddVeiculo'
import Ocorrencias from './views/Ocorrencias'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/perfil/:tipo/:id',
      name: 'perfil',
      component: Perfil
    },
    {
      path: '/funcionarios',
      name: 'funcionarios',
      component: Funcionarios
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: Clientes
    },
    {
      path: '/clientes/criar',
      name: 'addCliente',
      component: AddCliente
    },
    {
      path: '/veiculos',
      name: 'veiculos',
      component: Veiculos
    },
    {
      path: '/detalhes/veiculos/:id',
      name: 'detalheVeiculos',
      component: DetalheVeiculos
    },
    {
      path: '/veiculos/criar',
      name: 'addVeiculo',
      component: AddVeiculo
    },
    {
      path: '/ocorrencias',
      name: 'ocorrencias',
      component: Ocorrencias
    }
  ]
})
