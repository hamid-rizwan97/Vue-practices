<template>
  <div>
    <h1>{{ title }}</h1>
    <section id="user-golas">
      <h2>My Course Goals</h2>
      <input type="text" v-model="enteredValue"/>
      <button  @click="addGoal()">Add Goal</button>
      <p v-if="goals.length === 0">No Goals Added Yet</p>
      <ul>
        <li v-for="goal in goals">
          {{ goal }}
          <button @click="removegoal(index)">Remove</button>
        </li>
        
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      enteredValue: "",
      title: "Conditional Rendering",
      goals:[],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue='';
     
    },
    removegoal(idx)
    {
        this.goals.splice(idx,1)
    }
  },
};
</script>
<style></style>
