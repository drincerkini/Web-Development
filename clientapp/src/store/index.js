import { createStore } from "vuex";
import axios from "axios";
import signupUser from "../../firebase/user/signupUser";
import loginUser from "../../firebase/user/loginUser";

const API_URL = "http://localhost:3000/products";

const store = createStore({
  state: {
    user: null,
    products: [],
  },
  getters: {
    username(state) {
      return state.user.email;
    },
  },
  mutations: {
    //Mutation for setting an actual user
    setUser(state, user) {
      state.user = user;
    },

    // READ operation
    getProducts(state, products) {
      state.products = products;
    },

    // CREATE operation
    addProduct(state, product) {
      state.products.push(product);
    },

    // UPDATE operation
    updateProduct(state, product) {
      const index = state.products.findIndex((i) => i._id === product._id);
      if (index !== -1) {
        state.products.splice(index, 1, product);
      }
    },

    // DELETE operation
    deleteProduct(state, productId) {
      state.products = state.products.filter((prod) => prod._id !== productId);
    },
  },

  actions: {
    //REGISTER USER METHOD WHICH CALLS SIGNUPUSER METHOD
    async register(_, payload) {
      await signupUser(payload);
      payload.navigate();
    },

    // async login(_, user) {
    // const response = await signInWithEmailAndPassword(getAuth(), user.email, user.password);
    // if(response) {
    //     commit('setUser', response.user);
    // }else {
    //     throw new Error('Login failed');
    // }
    // },

    async login({ commit }, payload) {
      const { user } = await loginUser(payload);
      commit('setUser', user);
      payload.navigate();
    },

    // async fetchUser(context, user) {
    //   if (user) {
    //     context.commit("setUser", {
    //       email: user.email,
    //     });
    //   } else {
    //     context.commit("setUser", null);
    //   }
    // },

    async getProducts({ commit }) {
      const response = await axios.get(API_URL);

      commit("getProducts", response.data);
    },

    async addProduct({ commit }, product) {
      const response = await axios.post(API_URL, product);

      commit("addProduct", response);
    },

    async updateProduct({ commit }, product) {
      const response = await axios.put(`${API_URL}/${product._id}`, product);

      commit("updateProduct", response.data);
    },

    async deleteProduct({ commit }, productId) {
      await axios.delete(`${API_URL}/${productId}`);

      commit("deleteProduct", productId);
    },
  },
});

export default store;
