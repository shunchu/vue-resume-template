<template>
  <div class="flex flex-col gap-2">
    <div class="flex flex-col sm:flex-row sm:items-start sm:gap-4">
      <h1 class="text-3xl sm:text-5xl font-medium font-heading mb-1 sm:mb-0 w-full sm:w-2/3">
        {{ name }}
      </h1>
      <div class="w-full sm:w-1/3 text-left sm:text-right text-base">
        <div class="email break-all">{{ contact.email }}</div>
        <div class="phone">{{ contact.phone }}</div>
      </div>
    </div>
    <div class="w-full mt-2">
      <p class="intro text-sm sm:text-base">{{ intro }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "headline",
  props: ["contact", "intro", "name"]
};
</script>

<style scoped>
</style>
