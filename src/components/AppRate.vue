<template>
  <div class="container mx-auto my-12" v-if="!selectedCountry">
    <div class="rate-list flex flex-wrap sm:space-x-5 justify-between">
      <div
        class="
          group
          card-1
          flex-1
          shadow
          bg-white
          rounded
          text-center
          p-4
          m-auto
          hover:bg-indigo-300
          mb-3
        "
      >
        <Loader v-if="!globalRate" />

        <div v-else>
          <span
            class="
              label
              uppercase
              text-gray-500
              font-semibold
              text-base
              group-hover:text-white
            "
            >Все случаи</span
          >
          <div
            class="
              value
              text-indigo-400
              font-black
              text-4xl
              py-2
              group-hover:text-white
            "
          >
            {{ formatNumber(this.globalRate.TotalConfirmed) }}
          </div>
          <div
            class="
              value-2
              text-indigo-400
              font-semibold
              text-xl
              group-hover:text-white
            "
            v-if="this.globalRate.NewConfirmed > 0"
          >
            <span>+</span>
            {{ formatNumber(this.globalRate.NewConfirmed) }}
          </div>
        </div>
      </div>

      <div
        class="
          flex-1
          card-1
          shadow
          bg-white
          rounded
          text-center
          p-4
          group
          hover:bg-red-400
          mb-3
        "
      >
        <Loader v-if="!globalRate" />
        <div v-else>
          <span
            class="
              label
              uppercase
              text-gray-500
              font-semibold
              text-base
              group-hover:text-white
            "
            >Летальные исходы</span
          >
          <div
            class="
              value
              text-red-500
              font-black
              text-4xl
              py-2
              group-hover:text-white
            "
          >
            {{ formatNumber(this.globalRate.TotalDeaths) }}
          </div>
          <div
            class="
              value-2
              text-red-500
              font-semibold
              text-xl
              group-hover:text-white
            "
            v-if="this.globalRate.NewDeaths > 0"
          >
            <span>+</span>
            {{ formatNumber(this.globalRate.NewDeaths) }}
          </div>
        </div>
      </div>

      <div
        class="
          card-1
          flex-1
          shadow
          bg-white
          rounded
          text-center
          p-4
          group
          hover:bg-green-400
          mb-3
        "
      >
        <Loader v-if="!globalRate" />

        <div v-else>
          <span
            class="
              label
              uppercase
              text-gray-500
              font-semibold
              text-base
              group-hover:text-white
            "
            >Вылечилось</span
          >
          <div
            class="
              value
              text-green-500
              font-black
              text-5xl
              py-2
              group-hover:text-white
            "
          >
            {{ formatNumber(this.globalRate.TotalRecovered) }}
          </div>
          <div
            class="
              value-2
              text-green-500
              font-semibold
              text-xl
              group-hover:text-white
            "
            v-if="this.globalRate.newRecovered > 0"
          >
            <span>+</span>
            {{ formatNumber(this.globalRate.newRecovered) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "./AppLoader.vue";
export default {
  data() {
    return {};
  },
  computed: {
    selectedCountry() {
      return this.$store.state.selectedCountry;
    },
    globalRate() {
      return this.$store.state.globalRate;
    },
  },
  methods: {
    formatNumber(value) {
      return new Intl.NumberFormat({
        maximumSignificantDigits: 3,
      }).format(value);
    },
  },
  components: { Loader },
};
</script>

<style></style>
