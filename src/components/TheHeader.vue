<template>
  <div class="container mx-auto">
    <header
      class="
        shadow
        bg-white
        rounded-b-2xl
        p-3
        flex
        justify-center
        text-center
        items-center
        flex-wrap
        xsm:text-justify xsm:justify-between
      "
    >
      <div class="logo flex items-center flex-col xsm:flex-row">
        <img
          v-if="!this.selectedCountry"
          class="w-16 xsm:block hidden"
          src="../assets/icons/covid.png"
          alt="covid"
          height="fit-content"
        />
        <img
          v-if="this.selectedCountry"
          :src="`https://flagcdn.com/48x36/${this.selectedCountry.CountryCode.toLowerCase()}.png`"
          alt=""
        />
        <div class="m-auto pl-4">
          <h1 class="text-4xl font-medium xsm:text-2xl">
            {{
              this.selectedCountry ? this.selectedCountry.Country : "Covid-19"
            }}
          </h1>
          <p class="mb-2 xsm:mb-0">
            По состоянию на:
            <span class="date text-base font-medium">{{
              new Date().toLocaleDateString()
            }}</span>
          </p>
        </div>
      </div>

      <AppSearch :countries="countries" />
    </header>
  </div>
</template>

<script>
import AppSearch from "./AppSearch.vue";
export default {
  components: { AppSearch },
  computed: {
    selectedCountry() {
      console.log(this.$store.state.selectedCountry);
      return this.$store.state.selectedCountry;
    },
    countries() {
      return this.$store.state.countries;
    },
  },
};
</script>

<style></style>
