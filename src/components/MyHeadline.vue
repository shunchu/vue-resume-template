<template>
  <div class="flex flex-wrap">
    <h1 class="w-2/3 text-5xl font-medium font-heading mb-4">
      {{ name }}
    </h1>
    <div class="w-1/3 text-right text-base mb-4">
      <div class="email">{{ contact.email }}</div>
      <div class="phone">{{ contact.phone }}</div>
    </div>
    <div class="w-full mt-2">
      <p class="text-sm">{{ intro }}</p>
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
h1 {
  font-family: "Cochin", "Times New Roman";
}
</style>
