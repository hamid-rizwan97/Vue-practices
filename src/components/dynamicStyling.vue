<template>
  <div>
    <h1>{{ title }}</h1>
    <div
      class="demo"
      :class="boxAClass"
      @click="boxSelected('A')"
      @click.right="boxUnselect('A')"
    ></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Dynamic Styling",
      boxAselected: false,
    };
  },
  computed: {
    boxAClass() {
      return { active: this.boxAselected };
    },
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        this.boxAselected = true;
      }
    },
    boxUnselect(box) {
      if (box === "A") {
        this.boxAselected = false;
      }
    },
  },
};
</script>
<style scoped>
.demo {
  width: calc(100% - 32px);
  height: 100px;
  margin: 16px;
  border: 2px dashed #ccc;
}
.active {
  border-color: red;
  background-color: salmon;
}
</style>
