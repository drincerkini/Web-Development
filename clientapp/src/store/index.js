import { createStore } from "vuex";
import productModule from "./modules/productModule";
import serviceModule from "./modules/serviceModule";
import userModule from "./modules/userModule";

const store = createStore({
  modules: {
    productModule,
    serviceModule,
    userModule,
  },
});

export default store;
