<template>
  <div class="container mx-auto">
    <div class="bg-white shadow rounded">
      <div
        class="
          flex flex-wrap
          p-3
          items-center
          border-b-2 border-fuchsia-600
          justify-center
          xsm:justify-between
        "
      >
        <h2
          class="
            font-medium
            tracking-wider
            pl-2
            text-gray-600
            uppercase
            mb-2
            xsm:mb-0
          "
        >
          Страны мира
        </h2>
        <input
          type="text"
          class="bg-purple-white shadow rounded border-0 p-2"
          @input="(e) => (country = e.target.value)"
          placeholder="Фильтр по странам..."
        />
      </div>
      <div class="overflow-auto max-h-96">
        <div class="p-3" v-show="countries.length == 0">
          <p class="text-lg">
            Страны по заданным параметрам поиска не обнаружено
          </p>
        </div>
        <table class="relative w-full border-collapse">
          <thead class="sticky bg-gray-100 top-0">
            <tr class="divide-x">
              <th
                class="text-center text-sm font-medium text-gray-400 p-3 w-1/5"
              >
                Страна
              </th>
              <th class="text-center text-sm font-medium text-gray-400 p-3">
                Стучаи
              </th>
              <th
                class="text-center text-sm font-medium text-gray-400 p-3 w-2/12"
              >
                Новыe случаи
              </th>
              <th class="text-center text-sm font-medium text-gray-400 p-3">
                Смерти
              </th>
              <th class="text-center text-sm font-medium text-gray-400 p-3">
                Новые смерти
              </th>
              <th class="text-center text-sm font-medium text-gray-400 p-3">
                Вылечилось
              </th>
            </tr>
          </thead>
          <tbody class="border-t border-fuchsia-600">
            <tr
              v-for="(item, index) in countries"
              :key="index"
              class="divide-x"
            >
              <td class="border p-4 flex items-center">
                <img
                  :src="`https://flagcdn.com/48x36/${item.CountryCode.toLowerCase()}.png`"
                  width="22"
                  class="mr-3"
                />
                <p>{{ item.Country }}</p>
              </td>
              <td class="border p-4">
                {{ formatNumber(item.TotalConfirmed) }}
              </td>
              <td class="border p-4">
                {{ formatNumber(item.NewConfirmed) }}
              </td>
              <td class="border p-4">
                {{ formatNumber(item.TotalDeaths) }}
              </td>
              <td class="border p-4">
                {{ formatNumber(item.NewDeaths) }}
              </td>
              <td class="border p-4">
                {{ formatNumber(item.TotalRecovered) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      country: "",
    };
  },
  computed: {
    ...mapState(["countriesSummary"]),
    countries() {
      if (this.country == "") {
        return this.countriesSummary;
      }
      return this.countriesSummary.filter((c) => {
        return c.Country.toLowerCase().match(this.country.toLowerCase());
      });
    },
    filteredCountries() {
      return this.countries;
    },
  },
  methods: {
    formatNumber(value) {
      return new Intl.NumberFormat({
        maximumSignificantDigits: 3,
      }).format(value);
    },
  },
};
</script>

<style></style>
