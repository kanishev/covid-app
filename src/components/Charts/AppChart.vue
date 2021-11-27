<template>
  <div class="container mx-auto">
    <line-chart :chart-data="linedata"></line-chart>
  </div>
</template>

<script>
import LineChart from "./chart";

export default {
  data() {
    return {
      linedata: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Data One",
            borderColor: "#FC2525",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "white",
            backgroundColor: "transparent",

            data: [40, 39, 10, 40, 39, 80, 40],
          },
          {
            label: "Data Two",
            borderColor: "#05CBE1",
            pointBackgroundColor: "white",
            pointBorderColor: "white",
            borderWidth: 1,
            backgroundColor: "transparent",
            data: [60, 55, 32, 10, 2, 12, 53],
          },
          {
            label: "Data Three",
            borderColor: "#05CBE1",
            pointBackgroundColor: "white",
            pointBorderColor: "white",
            borderWidth: 1,
            backgroundColor: "transparent",

            data: [10, 35, 32, 12, 2, 12, 53],
          },
        ],
      },
    };
  },

  components: {
    LineChart,
  },
};
</script>

<style></style>
