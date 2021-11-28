import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: [],
    selectedCountry: null,
  },
  mutations: {
    setCountries(state, value) {
      state.countries = value;
    },
    setSelectedCountry(state, country) {
      console.log(11);
      state.selectedCountry = country;
    },
  },
  actions: {
    async fetchCountries({ commit }) {
      try {
        const { data } = await axios.get(`https://restcountries.com/v3.1/all`);

        console.log("LOADED");
        const countries = data.map((country) => {
          const { name, flag } = country;
          return {
            country: name,
            flag,
          };
        });

        commit("setCountries", countries);
      } catch (e) {
        console.log(e);
      }
    },
  },
  modules: {},
});
