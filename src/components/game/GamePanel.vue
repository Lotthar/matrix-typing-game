<template>
  <div class="q-ma-none screen-words-container">
    <falling-word v-for="(word, index) in fallingWords" :key="index" :word="word" :speed="speed" />
  </div>
</template>

<script>
import useGameOptions from 'src/service/useGameOptions';
import { useGameStore } from "stores/game";
import { storeToRefs } from "pinia";
import { defineComponent,ref, onMounted } from 'vue';

export default defineComponent({

  setup() {

    const gameStore = useGameStore();
    const { startGame } = useGameOptions();
    const { speed, screenWords } = storeToRefs(gameStore);
    const fallingWords = ref(screenWords.value);

    onMounted(() => {
      // startGame();
    })

    return { fallingWords, speed  }
  }

})
</script>
<style lang="scss" scoped>
.screen-words-container {
  position: relative;
}
</style>