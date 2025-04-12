<template>
  <li>
    <div class="px-2 py-1 text-sm">
      <strong>{{ vol.title }}</strong><span v-if="vol.cause">, {{ vol.cause }}</span>
      <span class="date text-sm text-gray-600">, {{ vol.date }}</span>
    </div>
  </li>
</template>

<script>
export default {
  props: ['vol'],
};
</script>

<style scoped>
</style>
