
import signupUser from "../../../firebase/user/signupUser";
import loginUser from "../../../firebase/user/loginUser";


const userModule = {
  namespaced: true,

  state: {
    user: null,
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
  },

  actions: {
    //REGISTER USER METHOD WHICH CALLS SIGNUPUSER METHOD
    async register(_, payload) {
      await signupUser(payload);
      payload.navigate();
    },

    async login({ commit }, payload) {
      const { user } = await loginUser(payload);
      commit("setUser", user);
      payload.navigate();
    },

    async fetchUser(context, user) {
      if (user) {
        context.commit("setUser", {
          email: user.email,
        });
      } else {
        context.commit("setUser", null);
      }
    },
  },
};

export default userModule;
