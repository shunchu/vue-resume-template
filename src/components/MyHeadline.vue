<template>
  <div class="row">
    <h1 class="col-8 text-left">
      <strong>{{ name }}</strong>
    </h1>
    <div class="col-4 text-right">
      <div class="email">{{ contact.email }}</div>
      <div class="phone">{{ contact.phone }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headline",
  props: ["contact", "name"]
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
