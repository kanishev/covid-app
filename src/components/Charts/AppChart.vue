<template>
  <div class="container mx-auto my-10" v-if="this.selectedCountry">
    <line-chart :chartData="datacollection"></line-chart>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
import LineChart from "./chart";

export default {
  data() {
    return {
      // linedata: {
      //   labels: [
      //     "January",
      //     "February",
      //     "March",
      //     "April",
      //     "May",
      //     "June",
      //     "July",
      //   ],
      //   datasets: [
      //     // {
      //     //   borderColor: "#05CBE1",
      //     //   pointBackgroundColor: "white",
      //     //   pointBorderColor: "white",
      //     //   borderWidth: 1,
      //     //   backgroundColor: "transparent",
      //     //   data: [0],
      //     // },
      //   ],
      // },

      datacollection: null,
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
    fillData() {
      this.datacollection = {
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [],
          },
        ],
      };

      for (let i = 0; i < 1000; i++) {
        this.datacollection.datasets[0].data.push(this.countryRate.deaths[i]);
      }
    },

    setData() {
      // const deaths = {
      //
      // };
      const confirmed = {
        label: "Выявлено",
        borderColor: "#05CBE1",
        pointBackgroundColor: "white",
        pointBorderColor: "white",
        borderWidth: 1,
        backgroundColor: "transparent",
        data: [1, 2, 30, 20, 50],
      };
      // this.linedata.datasets = [...this.linedata.datasets, deaths];
      this.linedata.datasets.push(confirmed);
      // this.linedata.datasets[0].data.push(111);
    },
  },
  watch: {
    countryRate() {
      this.fillData();
    },
  },
  components: {
    LineChart,
  },
};
</script>

<style></style>
