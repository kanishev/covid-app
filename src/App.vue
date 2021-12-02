<template>
  <div id="app">
    <main class="main bg-gray-50 pb-14">
      <TheHeader />
      <AppRate />
      <AppChart />
      <AppTable />
    </main>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import AppChart from "./components/Charts/AppChart.vue";
import AppTable from "./components/AppTable.vue";
import AppRate from "./components/AppRate.vue";

export default {
  name: "App",
  components: { TheHeader, AppChart, AppTable, AppRate },
  created() {
    this.$store.dispatch("fetchGlobalData");
  },
};
</script>

<style></style>
