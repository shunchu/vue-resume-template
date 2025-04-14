<template>
  <li>
    <div class="bg-gray-100 px-2 py-1 text-sm">
      <strong>{{ experience.title }}</strong>, {{ experience.company }}, {{ experience.location }}
    </div>
    <div class="text-sm text-gray-600 mb-1 px-2">
      {{ experience.date }}
    </div>
    <div class="mb-2 text-sm px-2" v-if="experience.desc.info">
      {{ experience.desc.info }}
    </div>
    <div v-if="experience.desc.resp && experience.desc.resp.length > 0">
      <ul class="mb-2 text-sm p-0 m-0 px-2 pl-5 list-inside list-[circle]">
        <li class="mb-1" v-for="(respItem, index) in experience.desc.resp" v-bind:key="index">{{ respItem }}</li>
      </ul>
    </div>
    <div class="text-sm text-gray-500 mb-2 px-2" v-if="experience.desc.tools">
      <strong>Tools:</strong> {{ experience.desc.tools }}
    </div>
    <div class="text-sm text-gray-500 px-2" v-if="experience.desc.services">
      <strong>Services:</strong> {{ experience.desc.services }}
    </div>
  </li>
</template>

<script>
export default {
  props: ['experience'],
};
</script>

<style scoped>
</style>
