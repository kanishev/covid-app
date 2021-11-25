<template>
  <div id="app">
    <main class="main bg-gray-50">
      <TheHeader />
      <AppRate />
      <AppChart />
      <AppTable />
      <TheFooter />
    </main>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import AppChart from "./components/AppChart.vue";
import AppTable from "./components/AppTable.vue";
import AppRate from "./components/AppRate.vue";

export default {
  name: "App",
  components: { TheHeader, TheFooter, AppChart, AppTable, AppRate },
};
</script>

<style></style>
