import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ["chartData"],
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        hover: {
          animationDuration: 0,
        },
        responsiveAnimationDuration: 0,
        elements: {
          point: {
            radius: 1,
          },
        },
      },
    };
  },
  mounted() {
    if (this.chartData) {
      this.renderChart(this.chartData, this.options);
    }
  },
  watch: {
    chartData: function () {
      this.renderChart(this.chartData, this.options);
    },
  },
};
