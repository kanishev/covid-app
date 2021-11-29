<template>
  <div class="container mx-auto my-10" v-if="selectedCountry">
    <line-chart :chart-data="linedata"></line-chart>
  </div>
</template>

<script>
import LineChart from "./chart";

export default {
  data() {
    return {
      linedata: {
        // labels: [
        //   "January",
        //   "February",
        //   "March",
        //   "April",
        //   "May",
        //   "June",
        //   "July",
        // ],
        datasets: [],
      },
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
      // const deaths = {
      //   label: "Летальные исходы",
      //   borderColor: "#05CBE1",
      //   pointBackgroundColor: "white",
      //   pointBorderColor: "white",
      //   borderWidth: 1,
      //   backgroundColor: "transparent",
      //   data: [1, 2, 3, 4],
      // };
      const confirmed = {
        label: "Выявлено",
        borderColor: "#05CBE1",
        pointBackgroundColor: "white",
        pointBorderColor: "white",
        borderWidth: 1,
        backgroundColor: "transparent",
        data: this.countryRate.confirmed,
      };
      // this.linedata.datasets = [...this.linedata.datasets, deaths];
      this.linedata.datasets.push(confirmed);
      // this.linedata.datasets[0].data.push(111);
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
