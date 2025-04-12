<template>
  <li>
    <div class="bg-gray-100 px-2 py-1 text-sm"><strong>{{ edu.school }}</strong>, {{ edu.location }}</div>
    <div class="text-sm mt-1 px-2">{{ edu.degree }}</div>
    <div v-if="edu.distinctions && edu.distinctions.length > 0" class="mt-1">
      <ul class="distinctions text-sm text-gray-600 p-0 m-0 px-2 pl-5 list-inside list-[circle]">
        <li class="mb-1" v-for="(distinction, index) in edu.distinctions" :key="index">{{ distinction }}</li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  props: ['edu'],
};
</script>

<style scoped>
</style>
