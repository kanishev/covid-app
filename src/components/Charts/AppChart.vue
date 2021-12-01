<template>
  <div class="container mx-auto my-10" v-if="this.selectedCountry">
    <line-chart :chartData="linedata[0]"></line-chart>
    <line-chart :chartData="linedata[1]"></line-chart>
    <line-chart :chartData="linedata[2]"></line-chart>
  </div>
</template>

<script>
import LineChart from "./chart";

export default {
  data() {
    return {
      linedata: [
        {
          datasets: [
            {
              borderColor: "#05CBE1",
              pointBackgroundColor: "white",
              pointBorderColor: "white",
              borderWidth: 1,
              backgroundColor: "transparent",
              data: [0, 0, 0, 0, 0],
            },
          ],
        },
      ],
    };
  },
  computed: {
    selectedCountry() {
      return this.$store.state.selectedCountry;
    },
    countryRate() {
      return this.$store.state.countryRate;
    },
  },
  methods: {
    setData() {
      const deaths = {
        label: "Летальные исходы",
        borderColor: "red",
        pointBackgroundColor: "white",
        pointBorderColor: "white",
        borderWidth: 2,
        backgroundColor: "transparent",
        data: this.countryRate.deaths,
      };
      const confirmed = {
        label: "Выявлено",
        borderColor: "#05CBE1",
        pointBackgroundColor: "white",
        pointBorderColor: "white",
        borderWidth: 2,
        backgroundColor: "transparent",
        data: this.countryRate.confirmed,
      };
      const recovered = {
        label: "Вылечилось",
        borderColor: "green",
        pointBackgroundColor: "white",
        pointBorderColor: "white",
        borderWidth: 2,
        backgroundColor: "transparent",
        data: this.countryRate.recovered,
      };

      this.linedata = [
        {
          labels: [...this.countryRate.dates],
          datasets: [deaths],
        },
        {
          labels: [...this.countryRate.dates],
          datasets: [confirmed],
        },
        {
          labels: [...this.countryRate.dates],
          datasets: [recovered],
        },
      ];
    },
  },
  watch: {
    countryRate() {
      this.setData();
    },
  },
  components: {
    LineChart,
  },
};
</script>

<style></style>
