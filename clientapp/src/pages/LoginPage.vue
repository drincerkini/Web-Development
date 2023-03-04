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

    // name: "LoginComponent",
    //   setup() {
    //   const email = ref('')
    //   const password = ref('')
    //   const error = ref(null)
  
    //   const store = useStore()
    //   const router = useRouter()
  
    //   const Login = async () => {
    //     try {
    //       await store.dispatch('logIn', {
    //         email: email.value,
    //         password: password.value
    //       })
    //       router.push('/')
    //     }
    //     catch (err) {
    //       error.value = err.message
    //     }
    //   }
    //   return { Login, email, password, error }
    // }
  };
  </script>