<template>
  <div class="row no-wrap justify-evenly">
    <words-input @onEnterWord="onWordEntered" />
    <time-status />
    <game-speed />
    <restart-game />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({

  setup() {
    
    const onWordEntered = (word) => {
        console.log(word.value);
    }

    return { onWordEntered }
  }

})
</script>TimeStatus