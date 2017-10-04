<template>
  <li class="volunteer">
    <div><strong>{{ vol.title }}</strong>, {{ vol.cause }}, <span class="date">{{vol.date }}</span></div>
  </li>
</template>

<script>
  export default {
    name: 'education',
    props: ['vol']
  }
</script>

<style scoped>
li {
  padding: 0;
}
</style>
