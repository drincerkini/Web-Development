import { createStore } from 'vuex';
import axios from 'axios';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const API_URL_PROD = 'http://localhost:3000/products';
const API_URL_WOMANPROD= 'http://localhost:3000/womanproduct';

const store = createStore({
    state: {
        user: null,
        products: [],
        womanproducts: []
    },
    getters: {
        username(state){
            return state.user.email;
        }
    },
    mutations: {


        SET_USER(state, user) {
            state.user = user;
        },

        // READ operation
        getProducts(state, products){
            state.products = products;
        },

        // CREATE operation
        addProduct(state, product){
            state.products.push(product);
        },

        // UPDATE operation
        updateProduct(state, product){
            const index = state.products.findIndex(i => i._id === product._id);
            if(index !== -1){
                state.products.splice(index, 1, product);
            }
        },

        // DELETE operation
        deleteProduct(state, productId){
            state.products = state.products.filter(prod => prod._id !== productId);
        },

        // Read Operation from woman prpoduct
        getWomanProd(state, product){
            state.womanproducts = product;
        },

        //Create Operation for WomanProduct
        addWomanProd(state, product){
            state.womanproducts.push(product);
        },

        //Update Operation for woman product
        updateWomanProd(state, product){
            const index = state.womanproducts.findIndex(i => i._id === product._id);
            if(index !== -1){
                state.womanproducts.splice(index, 1, product);
            }
        },

        //DELETE Operation fro woman Product
        deleteWomanProd(state, productId){
            state.womanproducts = state.womanproducts.filter(prod => prod._id !== productId);
        }

    },
    actions: {
        
        async register( { commit },  user){
            const response = await createUserWithEmailAndPassword(getAuth(), user.email, user.password);
            if(response) {
                commit('SET_USER', response.user);
            }else{
                throw new Error('Unable to register user');
            }
        },

        async logIn( { commit }, user){
            const response = await signInWithEmailAndPassword(getAuth(), user.email, user.password);
            if(response) {
                commit('SET_USER', response.user);
            }else {
                throw new Error('Login failed');
            }
        },

        async fetchUser(context ,user) {
            if (user) {
              context.commit("SET_USER", {
                email: user.email
              });
            } else {
              context.commit("SET_USER", null);
            }
        },

        async logOut({ commit }){
            await signOut(getAuth());
            commit('SET_USER', null);
        },

        async getProducts( { commit } ){
            const response = await axios.get(API_URL_PROD);

            commit('getProducts', response.data);
        },

        async addProduct( { commit }, product){
            const response = await axios.post(API_URL_PROD, product);

            commit('addProduct', response)
        },

        async updateProduct( { commit }, product){
            const response = await axios.put(`${API_URL_PROD}/${product._id}`, product);

            commit('updateProduct', response.data);
        },

        async deleteProduct( { commit }, productId){
            await axios.delete(`${API_URL_PROD}/${productId}`);

            commit('deleteProduct', productId);
        },

        //actions for woman Product

        async getWomanProducts( { commit } ){
            const response = await axios.get(API_URL_WOMANPROD);

            commit('getWomanProd', response.data);
        },

        async addWomanProduct( { commit }, product){
            const response = await axios.post(API_URL_WOMANPROD, product);

            commit('addProduct', response)
        },

        async updateWomanProduct( { commit }, product){
            const response = await axios.put(`${API_URL_WOMANPROD}/${product._id}`, product);

            commit('updateProduct', response.data);
        },

        async deleteWomanProduct( { commit }, productId){
            await axios.delete(`${API_URL_WOMANPROD}/${productId}`);

            commit('deleteProduct', productId);
        },
    }
});

export default store;