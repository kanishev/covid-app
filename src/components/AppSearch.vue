<template>
  <div class="relative">
    <input
      type="text"
      class="bg-purple-white shadow rounded border-0 p-3"
      :placeholder="
        this.selectedCountry ? selectedCountry.Country : 'Поиск по странам...'
      "
      v-model="value"
      @input="(e) => (value = e.target.value)"
      @keydown.enter="selectCountry"
    />
    <div
      class="absolute pin-r pin-t top-1 right-0 mt-3 mr-4 text-purple-lighter"
    >
      <search-icon></search-icon>
    </div>
    <div class="relative" v-if="isListVisible">
      <ul
        class="
          absolute
          w-full
          bg-white
          rounded-b
          p-2
          border-b
          overflow-auto
          max-h-64
        "
      >
        <li class="p-2 cursor-pointer" v-if="this.countryList.length == 0">
          Страна не найдена
        </li>
        <li
          v-for="country in countryList"
          :key="country.Country"
          class="p-2 cursor-pointer"
          @click="selectCountry(country.Country)"
        >
          {{ country.Country }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SearchIcon from "../assets/icons/search.svg";
import { mapState } from "vuex";
export default {
  props: ["countries"],
  data() {
    return {
      value: "",
      isListVisible: false,
    };
  },
  computed: {
    ...mapState(["selectedCountry"]),
    countryList() {
      if (this.value == "" || this.countries.length == 0) {
        return [];
      }
      return this.countries.filter((country) => {
        return country.Country.toLowerCase().includes(this.value.toLowerCase());
      });
    },
  },
  methods: {
    selectCountry(value) {
      if (typeof value == "string") {
        this.value = value;
      }

      let country = this.countryList.find((c) => {
        return c.Country.toLowerCase().includes(this.value.toLowerCase());
      });

      if (country) {
        this.$store.commit("setSelectedCountry", country);
        this.$store.dispatch("fetchCountryData");
        this.value = "";
      }
    },
  },
  watch: {
    value() {
      if (this.value.length) {
        this.isListVisible = true;
      } else {
        this.isListVisible = false;
      }
    },
  },
  components: { SearchIcon },
};
</script>

<style></style>
