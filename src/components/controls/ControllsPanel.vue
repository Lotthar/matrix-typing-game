<template>
  <div class="row no-wrap justify-evenly">
    <words-input-panel @onEnter="wordEntered" />
    <status-panel :score="score" :bestScore="bestScore" :timeRemaining="timeRemaining" />
    <settings-panel />
    <!-- <restart-game /> -->
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
// import useGameOptions from "src/service/useGameOptions";
import { useGameStore } from "stores/game";
import { storeToRefs } from "pinia";
import useWords from "src/service/useWords";

export default defineComponent({

  setup() {
    
    const gameStore = useGameStore();
    const { getWordScoreValue } = useWords();
    const { score, bestScore, timeRemaining } = storeToRefs(gameStore);

    const wordEntered = (word) => {
      score.value += getWordScoreValue(word);
    }

    return {wordEntered ,score,bestScore, timeRemaining }
  }

})
</script>