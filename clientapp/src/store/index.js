import { createStore } from 'vuex';
import axios from 'axios';
import signupUser from "../../firebase/user/signupUser";
import loginUser from "../../firebase/user/loginUser";


const API_URL_PROD = 'http://localhost:3000/products';
const API_URL_WOMAN_PROD= 'http://localhost:3000/womanproduct';

const store = createStore({
    state: {
        user: null,
        products: [],
        womanproductslist: []
    },
    getters: {
        username(state){
            return state.user.email;
        }
    },


    mutations: {


       //Mutation for setting an actual user
        setUser(state, user) {
            state.user = user;
        },

        ///mutation for product

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
            state.womanproductslist = product;
        },
    
        ADD_WOMAN_PRODUCT(state, product){
            state.womanproductslist.push(product);
        },
    
        UPDATE_WOMAN_PRODUCT(state, product){
            const index = state.womanproductslist.findIndex(i => i._id === product._id);
            if(index !== -1){
                state.womanproductslist.splice(index, 1, product);
            }
        },
    
        DELETE_WOMAN_PRODUCT(state, id){
            state.womanproductslist = state.womanproductslist.filter(prod => prod._id !== id);
        }

    },
    actions: {
        
         //REGISTER USER METHOD WHICH CALLS SIGNUPUSER METHOD
        async register(_, payload) {
            await signupUser(payload);
            payload.navigate();
        },

        async login({ commit }, payload) {
            const { user } = await loginUser(payload);
            commit('setUser', user);
            payload.navigate();
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

        //actions for products
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