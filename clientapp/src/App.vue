<template>
  <HeaderComponent />
  <!-- <nav>
    <ul>
      <li><router-link to="/" class="lista">Home</router-link></li>
      <li><router-link to="/about" class="lista">About</router-link></li>
      <li><router-link to="/products" class="lista">Products</router-link></li>
      <li><router-link to="/create-product" class="lista">create Product</router-link></li>
      <li><router-link to="/image" class="lista">Image</router-link></li>
      <li><router-link to="/womanproduct" class="lista">Woman Products</router-link></li> 
      <li><router-link to="/create-womanprod" class="lista">Add Woman Products</router-link></li>
    </ul>

    <div v-if="$store.state.user">
        <div class="username">
            Hello {{ $store.state.user.email }}
        </div>
        <a href="#" @click.prevent="handleLogOut" type="button">Logout</a>
    </div>
    <div v-else >
        <router-link :to="{ name: 'login'}">Login</router-link>
        <router-link to="/register">Register</router-link>
    </div>

  </nav> -->
  <RouterView ></RouterView>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',

  components: {
    HeaderComponent
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav{
  background-color: #456b90;
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

.username{
  color: white;
}

</style>
