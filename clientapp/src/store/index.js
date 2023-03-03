import { createStore } from 'vuex';
import axios from 'axios';

const API_URL = 'http://localhost:3000/products';

const store = createStore({
    state: {
        products: []
    },
    getters: {},
    mutations: {

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
        }

    },
    actions: {
        async getProducts( { commit } ){
            const response = await axios.get(API_URL);

            commit('getProducts', response.data);
        },

        async addProduct( { commit }, product){
            const response = await axios.post(API_URL, product);

            commit('addProduct', response)
        },

        async updateProduct( { commit }, product){
            const response = await axios.put(`${API_URL}/${product._id}`, product);

            commit('updateProduct', response.data);
        },

        async deleteProduct( { commit }, productId){
            await axios.delete(`${API_URL}/${productId}`);

            commit('deleteProduct', productId);
        }
    }
});

export default store;