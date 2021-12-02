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
    closeChart(state) {
      state.selectedCountry = null;
      state.countryRate = {};
    },
    setCountryData(state, data) {
      console.log(data);
      const rate = {
        confirmed: [],
        deaths: [],
        dates: [],
        recovered: [],
      };

      for (let i = 1; i < data.length; i++) {
        if (
          data[i].Confirmed == 0 ||
          data[i].Deaths == 0 ||
          data[i].Recovered == 0
        ) {
          continue;
        }

        if (data[i].Confirmed - data[i - 1].Confirmed !== 0) {
          rate.confirmed.push(
            Math.abs(data[i].Confirmed - data[i - 1].Confirmed)
          );
        }

        if (rate.deaths.push(data[i].Deaths - data[i - 1].Deaths) !== 0) {
          rate.deaths.push(Math.abs(data[i].Deaths - data[i - 1].Deaths));
        }
        rate.recovered.push(data[i].Recovered - data[i - 1].Recovered);
        rate.dates.push(data[i].date);
      }

      state.countryRate = rate;
      console.log(state.countryRate);
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
        `https://api.covid19api.com/country/${country}?from=2021-06-01T00:00:00Z&to=2021-12-01T00:00:00Z`
      );

      const result = data.map((i) => {
        const { Deaths, Confirmed, Recovered } = i;
        const date = i.Date.split("T")[0];
        return { Deaths, Confirmed, date, Recovered };
      });

      commit("setCountryData", result);
    },
  },
  modules: {},
});
