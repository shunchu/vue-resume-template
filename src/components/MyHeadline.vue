<template>
  <div class="row">
    <h1 class="col-8">
      <strong>{{ name }}</strong>
    </h1>
    <div class="col-4 text-end">
      <div class="email">{{ contact.email }}</div>
      <div class="phone">{{ contact.phone }}</div>
    </div>
    <p>{{ intro }}</p>
  </div>
</template>

<script>
export default {
  name: "headline",
  props: ["contact", "intro", "name"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-family: "Cochin", "Times New Roman", serif;
  font-weight: normal;
}
</style>
