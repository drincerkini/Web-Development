<template>
  <section>
    <h1>Register</h1>
    <form @submit.prevent="handleRegisterUser" class="regisrter-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input id="name" type="text" required v-model="name" />
      </div>
      <div class="form-group">
        <label for="surname">Surname:</label>
        <input id="surname" type="text" required v-model="surname" />
      </div>
      <div class="form-group">
        <label for="address">Address:</label>
        <input id="address" type="text" required v-model="address" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" type="email" required v-model="email" />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input id="password" type="password" required v-model="password" />
      </div>
      <button>Register</button>
    </form>
  </section>
</template>

<script>


export default {
  data() {
    return {
      name: '',
      surname: '',
      address: '',
      email: '',
      password: '',
    }
  },
  methods: {
    async handleRegisterUser() {
      try {
        await this.$store.dispatch('register', {
          name: this.name,
          surname: this.surname,
          address: this.address,
          email: this.email,
          password: this.password,
          navigate: () => this.$router.push('/')
        }
        );
      }
      catch (err) {
        console.log('err', err);
      }
    }
  }
}


</script>