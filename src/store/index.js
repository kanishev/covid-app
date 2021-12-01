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
      console.log(data);
      const rate = {
        confirmed: [],
        deaths: [],
        dates: [],
        recovered: [],
      };

      data.forEach((d) => {
        if (d.Confirmed > 0 && d.Deaths > 0) {
          rate.confirmed.push(d.Confirmed);
          rate.deaths.push(d.Deaths);
          rate.recovered.push(d.Recovered);
          rate.dates.push(d.Date);
        }
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
        `https://api.covid19api.com/country/${country}?from=2021-01-01T00:00:00Z&to=2021-01-11T00:00:00Z`
      );

      console.log(data);
      const result = data.map((i) => {
        const { Deaths, Confirmed, Date, Recovered } = i;
        return { Deaths, Confirmed, Date, Recovered };
      });

      commit("setCountryData", result);
    },
  },
  modules: {},
});
