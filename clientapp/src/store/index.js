import { createStore } from "vuex";
import productModule from "./modules/productModule";
import serviceModule from "./modules/serviceModule";
import userModule from "./modules/userModule";
import teamModule from './modules/teamModule'
import newsModule from "./modules/newsModule";

const store = createStore({
  modules: {
    productModule,
    serviceModule,
    userModule,
    teamModule,
    newsModule
  },
});

export default store;
