import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: [],
    selectedCountry: null,
    globalRate: null,
    countriesSummary: [],
    countryRate: {},
  },
  mutations: {
    setGlobalRate(state, value) {
      state.globalRate = value;
    },
    setCountries(state, value) {
      state.countries = value;
    },
    setSelectedCountry(state, country) {
      state.selectedCountry = country;
    },
    setCountriesSummary(state, countries) {
      state.countriesSummary = countries;
    },
    setCountryData(state, data) {
      const rate = {
        confirmed: [],
        deaths: [],
      };

      data.forEach((d) => {
        rate.confirmed.push(d.Confirmed);
        rate.deaths.push(d.Deaths);
      });

      state.countryRate = rate;
    },
  },
  actions: {
    async fetchGlobalData({ commit }) {
      const { data } = await axios.get("https://api.covid19api.com/summary");
      const global = data.Global;
      const countries = data.Countries;

      const newCountries = countries
        .map((item) => item)
        .sort(function (a, b) {
          return b.TotalConfirmed - a.TotalConfirmed;
        });

      commit("setGlobalRate", global);
      commit("setCountriesSummary", newCountries);
      commit("setCountries", countries);
    },
    async fetchCountryData({ state, commit }) {
      let country = state.selectedCountry.Country;

      country = country.split(" ").join("-");

      const { data } = await axios.get(
        `https://api.covid19api.com/total/dayone/country/${country}`
      );

      const result = data.map((i) => {
        const { Deaths, Confirmed } = i;
        return { Deaths, Confirmed };
      });

      commit("setCountryData", result);
    },
  },
  modules: {},
});
