<template>
   <ul>
    <h1>{{ title }}</h1>
    <li v-for="ninja in ninjas_names">{{ ninja }}</li>
    <li v-for="ages in ninjas_ages">{{ ages }}</li>
   </ul>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title:"Global Component Nesting",
        ninjas_names:['Yoshi','Mario','Ryu'],
        ninjas_ages:['22','24','34']
      };
    }
  };
  </script>
  
  <style></style>
  