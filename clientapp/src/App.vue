<template>
  <nav>
    <ul>
      <li><router-link to="/" class="lista">Home</router-link></li>
      <li><router-link to="/about" class="lista">About</router-link></li>
      <li><router-link to="/products" class="lista">Products</router-link></li>
      <li><router-link to="/create-product" class="lista">create Product</router-link></li>
      <li><router-link to="/image" class="lista">Image</router-link></li>
      <!-- <li><router-link to="/register" class="lista">Register</router-link></li> -->
      <!-- <li><router-link to="/login" class="lista">Login</router-link></li> -->
    </ul>

    <div v-if="user">
      <div class="username">
        Hello {{ username }}
      </div>
      <a href="#" @click.prevent="handleLogOut" type="button">Logout</a>
    </div>
    <div v-else>
      <router-link :to="{ name: 'login' }">Login</router-link>
      <router-link to="/register">Register</router-link>
    </div>

  </nav>
  <RouterView></RouterView>
</template>

<script>
import { onAuthStateChanged,getAuth,signOut } from '@firebase/auth';
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'App',

  methods: {
    async handleLogOut() {
      const auth = getAuth()
      await signOut(auth);
      await this.$router.push('/login');
    }
  },


    computed: {
      ...mapState(['user']),
      ...mapGetters(['username'])
    },
    mounted() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.$store.commit('setUser', user)
        }
      })
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
  margin-top: 60px;
}

nav {
  background-color: #456b90;
  margin-bottom: 200px;
}

ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
}

li {
  color: white;
  text-decoration: none;
}

.lista {
  color: white;
}

.username {
  color: white;
}
</style>
