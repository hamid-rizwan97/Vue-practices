<template>
    <div class="parent">
        <h1>Filtered Component</h1>
        <input v-model="findtext" label="Enter Car">
        <hr>
        <ul>
            <li v-for="car in filteredcars">{{ car }}</li>
        </ul>


    </div>
</template>
<script>
export default{

    data()
    {
        return{
            cars:['Toyota','Honda','Suzuki','Mitsubishi'],
            findtext:''
        }
    },
    computed:{
      filteredcars()
      {
        return this.cars.filter((element)=>{
           return element.match(this.findtext);
        })
      }
    }
}
</script>
