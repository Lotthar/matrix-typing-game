<template>
  <div class="row no-wrap justify-evenly">
    <words-input-panel @onEnter="wordEntered" :readonly="timeRemaining === 0" />
    <status-panel :score="score" :bestScore="bestScore" :timeRemaining="timeRemaining" />
    <settings-panel />
    <!-- <restart-game /> -->
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useGameStore } from "stores/game";
import { storeToRefs } from "pinia";
import useWords from "src/service/useWords";

export default defineComponent({

  setup() {
    
    const gameStore = useGameStore();
    const { getWordScoreValue } = useWords();
    const { score,screenWords, bestScore, timeRemaining } = storeToRefs(gameStore);

    const wordEntered = (word) => {
      score.value += getWordScoreValue(word);
    }

    return {wordEntered ,score,bestScore, timeRemaining ,screenWords}
  }

})
</script>