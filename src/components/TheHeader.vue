<template>
  <div class="container mx-auto">
    <header
      class="
        shadow
        bg-white
        rounded-b-2xl
        p-3
        flex
        justify-between
        items-center
      "
    >
      <div class="logo flex">
        <img class="w-16 h-auto" src="../assets/covid.png" alt="covid" />
        <div class="m-auto pl-2">
          <h1 class="text-xl font-normal">Covid-19 Статистика</h1>
          <p>
            По состоянию на:
            <span class="date text-base font-medium">{{
              new Date().toLocaleDateString()
            }}</span>
          </p>
        </div>
      </div>

      <AppSearch />
    </header>
  </div>
</template>

<script>
import AppSearch from "./AppSearch.vue";
export default {
  components: { AppSearch },
};
</script>

<style></style>
