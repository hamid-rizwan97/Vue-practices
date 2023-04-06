<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
    <ninjas></ninjas>
    <add></add>
    <biniding></biniding>
    <dynamicStyling></dynamicStyling>
    <conditional></conditional>
  </div>
</template>

<script>
import add from './add.vue'
import binding from './components/binding.vue'
import dynamicStyling from './components/dynamicStyling.vue';
import conditional from './components/conditional.vue';

export default {
  components:{
    'add':add,
  'biniding':binding,
  'dynamicStyling':dynamicStyling,
  'conditional':conditional


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
