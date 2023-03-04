<template>
<form @submit.prevent="handleLoginUser" class="login-form">
        <h3>Login</h3>
        <div class="form-wrapper">
            <div class="form-group">
                <label for="email" >Email:</label>
                <input id="email"
                    v-model="user.email"
                />
            </div>
            <div class="form-group">
                <label for="password" >Password:</label>
                <input id="password" type="password"
                    v-model="user.password"
                />
            </div>
            <div class="controlls">
                <button class="login-button">Login</button>
            </div>
        </div>
    </form>
  </template>
  
  <script>
  
  export default {

    data(){
      return {
        user: {
          email: '',
          password: '',
        }
      }
    },

    methods: {
      async handleLoginUser(){
        try {
          await this.$store.dispatch('logIn', this.user);
          this.$router.push('/')
        }
        catch (err) {
          console.log('err', err);
        }
      }
    }

  };
  </script>