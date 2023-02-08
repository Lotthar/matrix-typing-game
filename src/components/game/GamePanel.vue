<template>
  <div class="q-ma-none screen-words-container">
    <falling-word />
  </div>
</template>

<script>
import useGameOptions from 'src/service/useGameOptions';
import { defineComponent } from 'vue';

export default defineComponent({

  setup() {

    const { speedClass } = useGameOptions();

    // between 10 and 100;
    const randomPosition = 50;

    return { speedClass,randomPosition }
  }

})
</script>
<style lang="scss" scoped>
.screen-words-container {
  position: relative;
}
</style>