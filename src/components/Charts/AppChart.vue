<template>
  <div class="container mx-auto my-10" v-if="this.selectedCountry">
    <div class="cursor-pointer" @click="closeChart">
      <close-icon></close-icon>
    </div>
    <line-chart :chartData="linedata[0]"></line-chart>
    <line-chart :chartData="linedata[1]"></line-chart>
    <line-chart :chartData="linedata[2]"></line-chart>
  </div>
</template>

<script>
import LineChart from "./chart";
import CloseIcon from "../../assets/icons/close.svg";

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
        borderWidth: 3,
        backgroundColor: "transparent",
        data: this.countryRate.deaths,
      };
      const confirmed = {
        label: "Выявлено",
        borderColor: "#05CBE1",
        pointBackgroundColor: "#05CBE1",
        pointBorderColor: "#05CBE1",
        borderWidth: 3,
        backgroundColor: "transparent",
        data: this.countryRate.confirmed,
      };
      const recovered = {
        label: "Вылечилось",
        borderColor: "green",
        pointBackgroundColor: "white",
        pointBorderColor: "green",
        borderWidth: 3,
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
    closeChart() {
      this.$store.commit("closeChart");
    },
  },
  watch: {
    countryRate(data) {
      if (Object.keys(data).length !== 0) {
        this.setData();
      }
    },
  },
  components: {
    LineChart,
    CloseIcon,
  },
};
</script>

<style></style>
