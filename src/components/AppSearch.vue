<template>
  <div class="relative">
    <input
      type="text"
      class="bg-purple-white shadow-inner rounded border-0 p-3"
      placeholder="Поиск по странам..."
      v-model="value"
      @input="(e) => (value = e.target.value)"
      @keydown.enter="selectCountry"
    />
    <div
      class="absolute pin-r pin-t top-1 right-0 mt-3 mr-4 text-purple-lighter"
    >
      <search-icon></search-icon>
    </div>
    <div class="search-list relative" v-if="value.length > 3">
      <ul
        class="
          absolute
          w-full
          bg-white
          rounded-b
          p-2
          border-b
          overflow-auto
          max-h-64
        "
      >
        <li class="p-2">hello</li>
        <li class="p-2">hello</li>
        <li class="p-2">hello</li>
        <li class="p-2">hello</li>
        <li class="p-2">hello</li>
        <li class="p-2">hello</li>
        <!-- <li
            v-for="(item, index) in matches"
            :key="index"
            :class="{ selected: selected == index }"
            @click="itemClicked(index)"
            v-text="item.country"
          ></li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import SearchIcon from "../assets/icons/search.svg";
export default {
  data() {
    return {
      value: "",
    };
  },
  computed: {
    country() {
      return true;
    },
  },
  methods: {
    selectCountry() {
      console.log("1");
    },
  },
  components: { SearchIcon },
};
</script>

<style></style>
