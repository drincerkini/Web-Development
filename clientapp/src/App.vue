<template>
  
  <nav>
    <ul>
      <li><router-link to="/" class="lista">Home</router-link></li>
      <li><router-link to="/about" class="lista">About</router-link></li>
      <li><router-link to="/products" class="lista">Products</router-link></li>
      <li><router-link to="/create-product" class="lista">create Product</router-link></li>
    </ul>
  </nav>
  <RouterView ></RouterView>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav{
  background-color: #2c3e50;
  margin-bottom: 200px;
}

ul{
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
}

li{
  color: white;
  text-decoration: none;
}

.lista{
  color: white;
}

</style>
