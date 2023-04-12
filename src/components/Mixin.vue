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
import {fruitmixin} from './fruitmixin'
export default{
    mixins:[fruitmixin]
}
</script>
