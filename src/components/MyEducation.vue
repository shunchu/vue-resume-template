<template>
  <li class="education">
    <h6>{{ edu.school }}, {{ edu.location }}</h6>
    <ul class="distinctions">
      <li>{{ edu.degree }}</li>
      <li v-for="dist in edu.distinctions">{{ dist }}</li>
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'education',
    props: ['edu']
  }
</script>

<style scoped>

</style>
