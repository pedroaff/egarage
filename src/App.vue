<template>
  <div id="app" class="d-flex flex-column h-100">
    <Navbar></Navbar>
    <b-container style="margin-top: 15px">
      <router-view/>
    </b-container>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  position: relative;
  margin: 0;
  padding-bottom: 10rem;
  min-height: 100%;
}

.footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #efefef;
  text-align: center;
}

html {
  height: 100%;
  box-sizing: border-box;
}

</style>
