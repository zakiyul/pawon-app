import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    keranjang: [
      { id: 1, jumlah_pesanana: 3, keterangan: "nasi campur" },
      { id: 2, jumlah_pesanana: 2, keterangan: "pedas manis" },
    ],
  },
  getters: {
    isiKeranjang: (state) => state.keranjang,
  },
  mutations: {},
  // actions: {
  //   fetchKeranjang: () => {
  //     axios
  //       .get(`http://localhost:8000/keranjang/`)
  //       .then((res) => console.log(res.data))
  //       .catch((err) => console.log(err));
  //   },
  // },
  modules: {},
});
