<template>
  <div class="parent">
    <h1>{{ title }}</h1>
    <h3>{{ text }}</h3>
    <h3>{{ text | toUppercase }}</h3>
    
    <input v-model="findText">
    <ul>
        <li v-for="car in filteredCars()">

        </li>
    </ul>
  </div>
</template>
<script>
export default {
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  },
  data() {
    return {
      title: "Filters",
      text: "i am in lower case ",
      cars:['Toyota' ,'Honda','Audi','Suzuki','Mitsubishi'],
      findText:''
    };
  },
  computed:{
    filteredCars()
    {
     return this.cars.filter((element)=>{
         return element.match(this.findText)
     })
    }
  }
};
</script>
<style></style>
