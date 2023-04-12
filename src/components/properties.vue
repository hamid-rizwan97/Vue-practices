<template>
  <div id="parent-props">
    <h1>{{ title }}</h1>
    <div id="changeName">
      <p>Click me to show name</p>
      <button @click="showName()">Show</button>
      <P :name="name">{{ name }}</P>
      <button @click="reversename()">Reverse</button>
      <P>{{ newname }}</P>
      <button @click="resetname()">Reset</button>
      <P>{{ newname }}</P>
      <h4>Change Your Name Here</h4>
      <input type="text" label="Enter New Name" ref="changename" />
      <button @click="changeName()">Change Name</button>
     <P>You Name changed to:{{ name }}</P>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      title: "Dealing with Properties",
    };
  },
  computed: {
    changeName() {
        this.name=this.$refs.changename.value;
    },
    showName() {
      this.name = "Hamid";
    },
    reversename() {
      const newname = (this.name = this.name.split("").reverse().join(""));
    },
    resetname() {
      newname = this.name = this.name.split("").reverse().join("");
    },
  },
};
</script>
<style></style>
