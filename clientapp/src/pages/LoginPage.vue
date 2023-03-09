<template>
  <form @submit.prevent="handleLoginUser" class="login-form">
    <h3>Login</h3>
    <div class="form-wrapper">
      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input id="password" type="password" v-model="password" />
      </div>
      <div class="controlls">
        <button class="login-button">Login</button>
      </div>
    </div>
  </form>
</template>
  
<script>


export default {

  data() {
    return {
      user: null,
      email: '',
      password: '',
    }

  },

  methods: {
    async handleLoginUser() {
      this.$store.dispatch('login',{ 
       email: this.email,
       password: this.password,
       navigate: () => this.$router.push('/')
    }
  );
  }
}
};
</script>