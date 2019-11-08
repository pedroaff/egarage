import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About'
import Funcionarios from './views/Funcionarios'
import Clientes from './views/Clientes'
import Perfil from './views/Perfil'
import AddCliente from './views/AddCliente'

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
    }
  ]
})
