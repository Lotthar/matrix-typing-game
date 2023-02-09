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
import { useWordStore } from "stores/words";

import { storeToRefs } from "pinia";

export default defineComponent({

  setup() {
    
    const gameStore = useGameStore();
    const wordStore = useWordStore();

    const { increaseScore } = gameStore;
    const { scoreIfCorrect } = wordStore;
    const { score,screenWords, bestScore, timeRemaining } = storeToRefs(gameStore);

    const wordEntered = (word) => scoreIfCorrect(word.value,() => increaseScore(word.value));

    return {wordEntered ,score,bestScore, timeRemaining ,screenWords}
  }

})
</script>