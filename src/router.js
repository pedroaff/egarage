import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Clientes from './views/Clientes'
import Perfil from './views/Perfil'
import Veiculos from './views/Veiculos'
import AddCliente from './views/AddCliente'
import DetalheVeiculos from './views/DetalheVeiculos'
import AddVeiculo from './views/AddVeiculo'
import Ocorrencias from './views/Ocorrencias'
import DetalheOcorrencias from './views/DetalheOcorrencias'
import AddOcorrencia from './views/AddOcorrencia'

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
      path: '/usuarios/:id',
      name: 'perfil',
      component: Perfil
    },
    {
      path: '/usuarios',
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
      path: '/veiculos/:id',
      name: 'detalheVeiculos',
      component: DetalheVeiculos
    },
    {
      path: '/criar/veiculo/',
      name: 'addVeiculo',
      component: AddVeiculo
    },
    {
      path: '/ocorrencias',
      name: 'ocorrencias',
      component: Ocorrencias
    },
    {
      path: '/ocorrencias/:id',
      name: 'detalheOcorrencias',
      component: DetalheOcorrencias
    },
    {
      path: '/ocorrencias/criar',
      name: 'addOcorrencia',
      component: AddOcorrencia
    }
  ]
})
