import { createStore } from 'vuex';
import signupUser from "../../firebase/user/signupUser";
import loginUser from "../../firebase/user/loginUser";
import productModule from './modules/productModule';
import serviceModule from './modules/serviceModule';




const store = createStore({
    state: {
        user: null,
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

       

    },

    modules: {
        productModule,
        serviceModule
    }

    
});

export default store;