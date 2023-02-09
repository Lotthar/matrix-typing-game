<template>
  <div v-if="screenWords.length > 0" class="q-ma-none screen-words-container">
    <falling-word v-for="(word, index) in screenWords" :key="index" :word="word" :speed="speed" />
  </div>
</template>

<script>
import { useGameStore } from "stores/game";
import { useWordStore } from "stores/words";
import { storeToRefs } from "pinia";
import { defineComponent } from 'vue';

export default defineComponent({

  setup() {

    const gameStore = useGameStore();
    const wordStore = useWordStore();
    const { speed } = storeToRefs(gameStore);
    const { screenWords } = storeToRefs(wordStore);
    

    return { speed ,screenWords }
  }

})
</script>
<style lang="scss" scoped>
.screen-words-container {
  position: relative;
}
</style>