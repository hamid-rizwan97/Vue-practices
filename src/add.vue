<template>
    <div>
     <h1>{{ title }}</h1>
    <button v-on:click="add()">Add to increment a</button>
    <button v-on:click="sub() ">Add to decrement b </button>
    <p>{{ a }}</p>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        title:"Local Component Nesting",
        a:0,
        toggle:false,
      };
    },
    methods: {
      add() {
        this.a++;
        return a;
      },
      sub()
      {
        this.a--;
      }
    },
  };
  </script>
  
  <style></style>
  