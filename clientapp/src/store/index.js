import { createStore } from 'vuex';
import axios from 'axios';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';


const API_URL_PROD = 'http://localhost:3000/products';
const API_URL_WOMAN_PROD= 'http://localhost:3000/womanproduct';

const store = createStore({
    state: {
        user: null,
        products: [],
        womanproductsist: []
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

        //mutation s ffor woman products

        SET_WOMAN_PRODUCT(state, product){
            state.womanproductsist = product;
        },
    
        ADD_WOMAN_PRODUCT(state, product){
            state.womanproductsist.push(product);
        },
    
        UPDATE_WOMAN_PRODUCT(state, product){
            const index = state.womanproductsist.findIndex(i => i._id === product._id);
            if(index !== -1){
                state.womanproductsist.splice(index, 1, product);
            }
        },
    
        DELETE_WOMAN_PRODUCT(state, id){
            state.womanproductsist = state.womanproductsist.filter(prod => prod._id !== id);
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


        //woman products actions

        async getWomanProductList( { commit } ){
        
            const response = await axios.get(API_URL_WOMAN_PROD);
            commit('SET_WOMAN_PRODUCT', response.data);
        },
    
    async getWomanById( { commit }, id){
        try {
            const response = await axios.get(`${API_URL_WOMAN_PROD}/${id}`);
            commit('SET_WOMAN_PRODUCT', response.data);
        } catch (error) {
            console.error(error);
        }
    },

    async addWomanProduct( { commit }, product){
        try{
            const response = await axios.post(API_URL_WOMAN_PROD, product);
            commit('ADD_WOMAN_PRODUCT', response);
        }catch (error) {
            console.error(error);
        }
    },

    async updateWomanProduct( { commit }, product){
        try{
            const response = await axios.put(`${API_URL_WOMAN_PROD}/${product._id}`, product);
            commit('UPDATE_WOMAN_PRODUCT', response.data);
        }catch (error) {
            console.error(error);
        }
    },

    async deleteWomanProduct( { commit }, id){
        try{
            await axios.delete(`${API_URL_WOMAN_PROD}/${id}`);
            commit('DELETE_WOMAN_PRODUCT', id);
        }catch (error) {
            console.error(error);
        }
    }
    },

    
});

export default store;