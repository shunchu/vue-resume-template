<template>
  <li class="experience">
    <h6>
      {{ experience.title }}, {{ experience.company }}, {{ experience.location }}
    </h6>

    <div class="date">{{ experience.date }}</div>

    <div class="details">
      <div v-if="experience.desc.info">
        <div>{{ experience.desc.info }}</div>
      </div>

      <div v-if="experience.desc.resp">
        <ul class="resp">
          <li v-for="resp in experience.desc.resp">{{ resp }}</li>
        </ul>
      </div>

      <div v-if="experience.desc.tools">
        <div class="tools">
          <strong>Tools:</strong> {{ experience.desc.tools }}
        </div>
      </div>

      <div v-if="experience.desc.services">
        <div class="services">
          <strong>3rd-party Services:</strong> {{ experience.desc.services }}
        </div>
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'experience',
    props: ['experience']
  }
</script>

<style scoped>
h6 {
  background: #ebebeb;
  border-radius: 4px;
  padding: 3px 8px;
}

ul {
  padding: 0 0 0 18px;
}

.date {
  padding: 0 0 0 15px;
}

.details {
  margin: 0 0 0 15px;
}
</style>
