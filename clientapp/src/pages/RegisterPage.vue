<template>
   <section>
        <h1>Register</h1>
        <form @submit.prevent="handleRegisterUser" >
            <div class="form-group">
                <label for="email">Email:</label>
                <input id="email" type="email" v-model="user.email" />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input id="password" type="password" v-model="user.password" />
            </div>
            <button>Register</button>
        </form>
    </section>
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
    async handleRegisterUser(){
      try {
        await this.$store.dispatch('register', this.user);
        this.$router.push('/')
      }
      catch (err) {
        console.log('err', err);
      }
    }
  }
}
  //   const Register = async () => {
  //     try {
  //       await store.dispatch('register', {
  //         email: email.value,
  //         password: password.value,
  //       })
  //       router.push('/')
  //     }
  //     catch (err) {
  //       error.value = err.message
  //           }
  //   }

  //   return { Register, name,email, password, error }
  // }

</script>