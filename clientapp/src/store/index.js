import { createStore } from 'vuex';
import axios from 'axios';

const API_URL = 'http://localhost:3000/products'

const store = createStore({
    state: {
        products: []
    },
    getters: {},
    mutations: {
        setProducts(state, products){
            state.products = products;
        },
        addProducts(state, products){
            state.products.push(products);
        }
    },
    actions: {
        async productsList( { commit } ){
            const response = await axios.get(API_URL);

            commit('setProducts', response.data);
        }
    }
});

export default store;