<template>
  <div class="container mx-auto my-12">
    <div class="rate-list flex space-x-5 justify-between">
      <div
        class="
          card-1
          flex-1
          shadow
          bg-white
          rounded
          text-center
          p-4
          hover:border-red-500
        "
      >
        <span class="label uppercase text-gray-500 font-semibold text-base"
          >Все случаи</span
        >
        <div class="value text-indigo-400 font-black text-4xl py-2">100000</div>
        <div class="value-2 text-indigo-400 font-semibold text-xl">
          <span>+</span>
          23
        </div>
      </div>

      <div class="card-1 flex-1 shadow bg-white rounded text-center p-4">
        <span class="label uppercase text-gray-500 font-semibold text-base"
          >Все случаи</span
        >
        <div class="value text-red-500 font-black text-5xl py-2">102030000</div>
        <div class="value-2 text-red-500 font-semibold text-xl">
          <span>+</span>
          23
        </div>
      </div>

      <div class="card-1 flex-1 shadow bg-white rounded text-center p-4">
        <span class="label uppercase text-gray-500 font-semibold text-base"
          >Все случаи</span
        >
        <div class="value text-green-500 font-black text-5xl py-2">
          10121312
        </div>
        <div class="value-2 text-green-500 font-semibold text-xl">
          <span>+</span>
          400
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
