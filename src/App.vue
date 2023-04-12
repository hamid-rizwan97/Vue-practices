<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
    <ninjas></ninjas>
    <add></add>
    <biniding></biniding>
    <dynamicStyling></dynamicStyling>
    <conditional></conditional>
    <properties></properties>
    <customDirectives> </customDirectives>
    <filters></filters>
    <filterComputed></filterComputed>
    <Mixin></Mixin>
  </div>
</template>

<script>
import add from "./add.vue";
import binding from "./components/binding.vue";
import dynamicStyling from "./components/dynamicStyling.vue";
import conditional from "./components/conditional.vue";
import properties from "./components/properties.vue";
import customDirectives from "./components/customDirectives.vue";
import filters from "./components/filters.vue";
import filterComputed from "./components/filterComputed.vue";
export default {
  mixins:[fruitmixin],
  components: {
    add: add,
    biniding: binding,
    dynamicStyling: dynamicStyling,
    conditional: conditional,
    properties: properties,
    customDirectives: customDirectives,
    filters:filters,
    filterComputed:filterComputed,
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
