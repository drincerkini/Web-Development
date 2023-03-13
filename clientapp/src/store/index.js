import { createStore } from "vuex";
import productModule from "./modules/productModule";
import serviceModule from "./modules/serviceModule";
import userModule from "./modules/userModule";
import teamModule from './modules/teamModule'

const store = createStore({
  modules: {
    productModule,
    serviceModule,
    userModule,
    teamModule
  },
});

export default store;
