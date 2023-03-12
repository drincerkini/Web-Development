<template>
  <!-- <section>
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
  </section> -->


  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
<br>
<br>
<div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card-group mb-0">
          <div class="card p-4">
            <div class="card-body">
              <h1>Register</h1>
              <p class="text-muted">Register as a new account</p>

              <form @submit.prevent="handleLoginUser">
                  <div class="input-group mb-3">
                    <span class="input-group-addon"><i class="fa fa-user"></i></span>
                    <input type="text" class="form-control" placeholder="Name" id="name" required v-model="name">
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-addon"><i class="fa fa-user"></i></span>
                    <input type="text" class="form-control" placeholder="Last Name" id="surname" required v-model="email">
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-addon"><i class="fa fa-user"></i></span>
                    <input type="text" class="form-control" placeholder="Addres" id="address" v-model="address">
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-addon"><i class="fa fa-user"></i></span>
                    <input type="email" class="form-control" placeholder="email" id="email" required v-model="email">
                  </div>
                  <div class="input-group mb-4">
                    <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                    <input type="password" class="form-control" placeholder="Password" id="password" required v-model="password">
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <button type="submit" class="btn btn-primary px-4">register</button>
                    </div>
                  </div>
              </form>

            </div>
          </div>
          <div class="card text-white bg-primary py-5 d-md-down-none" style="width:44%">
            <div class="card-body text-center">
              <div>
                <h2>Login </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button type="button" class="btn btn-primary active mt-3"> <router-link to="/login"> Login Now</router-link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
  <br />
<br />
<br />
<br />

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