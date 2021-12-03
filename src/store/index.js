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
    setGlobalRate(state, payload) {
      state.globalRate = payload;
    },
    setCountries(state, payload) {
      state.countries = payload;
    },
    setSelectedCountry(state, payload) {
      state.selectedCountry = payload;
    },
    setCountriesSummary(state, payload) {
      state.countriesSummary = payload;
    },
    closeChart(state) {
      state.selectedCountry = null;
      state.countryRate = {};
    },
    setCountryData(state, payload) {
      const rate = {
        confirmed: [],
        deaths: [],
        dates: [],
        recovered: [],
      };

      for (let i = 1; i < payload.length; i++) {
        if (
          payload[i].Confirmed == 0 ||
          payload[i].Deaths == 0 ||
          payload[i].Recovered == 0
        ) {
          continue;
        }

        if (payload[i].Confirmed - payload[i - 1].Confirmed > 0) {
          rate.confirmed.push(payload[i].Confirmed - payload[i - 1].Confirmed);
        }
        rate.deaths.push(payload[i].Deaths - payload[i - 1].Deaths);
        rate.recovered.push(payload[i].Recovered - payload[i - 1].Recovered);
        rate.dates.push(payload[i].date);
      }

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
});
