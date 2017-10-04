<template>
  <div class="headline">
    <table class="table borderless">
      <tbody>
        <tr>
          <td></td>
          <td class="left-padding">
            <div class="row">
              <h1 class="col-8 text-left"><strong>{{ name }}</strong></h1>
              <div class="col-4 text-right">
                <div class="email">{{ contact.email }}</div>
                <div class="phone">{{ contact.phone }}</div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'headline',
  props: ['contact', 'name']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-family: 'Cochin', 'Times New Roman';
  font-weight: normal;
}

table {
  margin: 0;
}

table.borderless td, .borderless th {
  border: none;
}

.left-padding {
  padding-left: 50px;
}
</style>
