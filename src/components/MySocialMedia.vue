<template>
  <li class="social-media">
    <strong>{{ medium.name }}:</strong> <a :href="medium.url" target="_blank">{{ medium.url }}</a>
  </li>
</template>

<script>
  export default {
    name: 'social-media',
    props: ['medium']
  }
</script>

<style scoped>
  li {
    padding: 0;
  }
</style>
