<template>
    <div id="nav">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">
                <img :src="require('./logo.jpg')" alt="">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item router-link to="/">Home</b-nav-item>
                <b-nav-item router-link to="/usuarios">Usuários</b-nav-item>
                <b-nav-item router-link to="/veiculos">Veículos</b-nav-item>
                <b-nav-item router-link to="/ocorrencias">Ocorrências</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

                <b-nav-item-dropdown
                    id="my-nav-dropdown"
                    toggle-class="nav-link-custom"
                    html="<b style='color: white'>Acessibilidade</b>"
                    right
                    >
                    <b-dropdown-item>Contraste</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>Aumento de fontes</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item router-link to="/login">Logout</b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import logo from './logo.jpg'

export default {
    name: "Navbar"
}
</script>

<style lang="scss" scoped>
#nav  {
  a {
    &.router-link-exact-active {
      text-decoration: underline;
    }
    font-weight: 600;
    color: white;
  }
  img {
        border-radius: 100%;
        width: 50%;
    }
  }

.bg-info {
    background-color: #ddc80a !important
}
.nav-item.span > a {
    font-weight: 600 !important;
    color: blue;
}

.classeflavera > a {
    font-weight: 600 !important;
    color: red;
}    

</style>