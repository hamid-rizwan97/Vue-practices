<template>
  <div class="parent">
    <h1>{{ title }}</h1>
    <h2 v-local-highlight:background.delayed.blink="{initialColor:'lightgreen' , secondarycolor:'salmon' , delay:700 }">
      I am handling a custom Directive
    </h2>
    
  </div>
</template>
<script>
export default {
  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 1000;
        }
        if (binding.modifiers["blink"]) {
          let initialColor = binding.value.initialColor;
          let secondarycolor = binding.value.secondarycolor;
          let currentcolor = initialColor;
          setTimeout(() => {
            setInterval(() => {
              currentcolor == secondarycolor
                ? (currentcolor = initialColor)
                : (currentcolor = secondarycolor);
              if (binding.arg == "background") {
                el.style.backgroundColor = currentcolor;
              } else {
                el.style.color = binding.value.initialColor;
              }
            }, 1000);
          }, binding.value.delay);
        }
      },
    },
  },
  data() {
    return {
        title:"Custom Directives"
    };
  },
};
</script>
<style></style>
