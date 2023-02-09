<template>
  <div v-if="screenWords.length > 0" class="q-ma-none screen-words-container">
    <falling-word v-for="(word, index) in fallingWords" :key="index" :word="word" :speed="speed" />
  </div>
</template>

<script>
import { useGameStore } from "stores/game";
import { useWordStore } from "stores/words";
import { storeToRefs } from "pinia";
import { defineComponent,ref, onMounted } from 'vue';

export default defineComponent({

  setup() {

    const gameStore = useGameStore();
    const wordStore = useWordStore();
    const { speed } = storeToRefs(gameStore);
    const { screenWords } = storeToRefs(wordStore);
    
    const { startGame } = gameStore;
    const { loadAllWords, addNewWordToScreen } = wordStore;

    const fallingWords = ref(screenWords.value);

    onMounted(() => {
      startGame(loadAllWords, resetGame, addNewWordToScreen);
    })

    const resetGame = () => {
      screenWords.value = [];
    }
    return { fallingWords, speed ,screenWords }
  }

})
</script>
<style lang="scss" scoped>
.screen-words-container {
  position: relative;
}
</style>