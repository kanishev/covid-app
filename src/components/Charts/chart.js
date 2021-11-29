import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Line,
  mixins: [reactiveProp],
  data() {
    return {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 0,
      },
      hover: {
        animationDuration: 0,
      },
      responsiveAnimationDuration: 0,
    };
  },
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    console.log(this.chartData);
    this.renderChart(this.chartData, this.options);
  },
};
