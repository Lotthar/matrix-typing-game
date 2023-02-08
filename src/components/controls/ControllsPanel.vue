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
import useGameOptions from "src/service/useGameOptions";
import useWords from "src/service/useWords";

export default defineComponent({

  setup() {
    
    const { timeRemaining, startGame, score, bestScore, changeSpeed } = useGameOptions();
    const { getWordScoreValue } = useWords();
    

    onMounted(() => {
      // startGame();
    })

    const wordEntered = (word) => {
      score.value += getWordScoreValue(word);
    }

    return {wordEntered ,score,bestScore, timeRemaining }
  }

})
</script>TimeStatus