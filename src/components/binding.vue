<template>
  <div>
    <h1>{{ title }}</h1>
  <input type="text" v-bind:value="name">
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Binding Function",
      name: "Arbaz",
    };
  },
};
</script>
<style></style>
