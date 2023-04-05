<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
    <ninjas></ninjas>
    <add></add>
  </div>
</template>

<script>
import add from './add.vue'
export default {
  components:{
    'add':add
  },
  data() {
    return {
      title: "First vue application",
    };
  },
  methods: {
    greeting() {
      return "happy Coding";
    },
  },
};
</script>

<style></style>
