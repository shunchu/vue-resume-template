<template>
  <li>
    <strong>{{ sm.name }}:</strong>
    <a :href="sm.url" target="_blank" class="text-blue-600 hover:text-blue-800 pl-2 hover:underline">
      {{ sm.url }}
    </a>
  </li>
</template>

<script>
export default {
  props: ['sm'],
};
</script>

<style scoped>
</style>
