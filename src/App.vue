<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Podanie podnetu</router-link> |
      <router-link to="/list">Zoznam podnetov</router-link> |
      <router-link to="/about">O stránke</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background: rgb(199, 199, 199);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
