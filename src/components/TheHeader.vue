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
      <div class="logo flex items-center">
        <img
          v-if="!this.selectedCountry"
          class="w-16"
          src="../assets/covid.png"
          alt="covid"
          height="fit-content"
        />
        <img
          v-if="this.selectedCountry"
          :src="`https://flagcdn.com/48x36/${this.selectedCountry.CountryCode.toLowerCase()}.png`"
          alt=""
        />
        <div class="m-auto pl-4">
          <h1 class="text-2xl font-medium">
            {{
              this.selectedCountry ? this.selectedCountry.Country : "Covid-19"
            }}
          </h1>
          <p>
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
