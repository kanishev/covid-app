<template>
  <div class="container mx-auto">
    <div class="bg-white shadow rounded">
      <div
        class="
          flex
          justify-between
          p-3
          items-center
          border-b-2 border-fuchsia-600
        "
      >
        <h2 class="font-medium tracking-wider pl-2 text-gray-600 uppercase">
          Страны мира
        </h2>
        <input
          type="text"
          class="bg-purple-white shadow rounded border-0 p-2"
          @input="(e) => (country = e.target.value)"
          placeholder="Фильтр по странам..."
        />
      </div>
      <div class="table__wrapper overflow-auto max-h-96">
        <div class="p-3" v-show="false">
          <p class="text-lg">
            Страны по заданным параметрам поиска не обнаружено
          </p>
        </div>
        <table class="relative w-full border-collapse">
          <thead class="sticky bg-gray-100 top-0">
            <tr class="divide-x">
              <th
                class="text-center text-sm font-medium text-gray-400 p-3 w-1/5"
              >
                Страна
              </th>
              <th class="text-center text-sm font-medium text-gray-400 p-3">
                Стучаи
              </th>
              <th
                class="text-center text-sm font-medium text-gray-400 p-3 w-2/12"
              >
                Новыe случаи
              </th>
              <th class="text-center text-sm font-medium text-gray-400 p-3">
                Смерти
              </th>
              <th class="text-center text-sm font-medium text-gray-400 p-3">
                Новые смерти
              </th>
              <th class="text-center text-sm font-medium text-gray-400 p-3">
                Вылечилось
              </th>
            </tr>
          </thead>
          <tbody class="border-t border-fuchsia-600">
            <tr v-for="(item, index) in 20" :key="index" class="divide-x">
              <td class="border p-4 w-7">
                <!-- <img
                  :src="`${publicPath}flags/${item.CountryCode}.png`"
                  width="22"
                />
                {{ item.Country }} -->11
              </td>
              <td class="border p-4">ss</td>
              <td class="border p-4">
                <!-- {{
                  item.NewConfirmed > 0 ? numberFormat(item.NewConfirmed) : ""
                }} -->
                22
              </td>
              <td class="border p-4">ss</td>
              <td class="border p-4">
                <!-- {{ item.NewDeaths > 0 ? numberFormat(item.NewDeaths) : "" }} -->
                33
              </td>
              <td class="border p-4">ss</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      country: "",
    };
  },
};
</script>

<style></style>
