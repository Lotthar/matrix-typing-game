<template>
  <div class="column justify-start text-primary">
    <h5 class="q-ma-none q-mb-sm q-pa-none text-center text-info text-weight-bolder">Game Settings</h5>
    <settings-select
      :option="timeRemainingOption"
      optionSuffix="sec"
      :options="gameTimeOptions"
      toolTip="Choose Game Duration"
      icon="las la-hourglass-half"
      @update:model-value="(val) => onSelectGameDuration(val,resetScreenWords, addNewWordToScreen)"
    />
    <settings-select
      :option="speed"
      optionSuffix="x"
      :options="gameSpeedOptions"
      toolTip="Choose Game Speed"
      icon="las la-tachometer-alt"
      @update:model-value="(val) => onSelectSpeed(val,resetScreenWords, addNewWordToScreen)"
    />
  </div>
</template>

<script>
import { defineComponent,ref } from 'vue';
import { useGameStore } from "stores/game";
import { useWordStore } from "stores/words";
import { storeToRefs } from "pinia";

export default defineComponent({

  setup () {

    const gameStore = useGameStore();
    const wordStore = useWordStore();

    const { onSelectGameDuration, onSelectSpeed } = gameStore
    const { resetScreenWords, addNewWordToScreen } = wordStore;
    const { speed,timeRemainingOption, gameTimeOptions, gameSpeedOptions } = storeToRefs(gameStore);   

    return {gameTimeOptions, gameSpeedOptions, speed, timeRemainingOption, onSelectGameDuration, onSelectSpeed, resetScreenWords, addNewWordToScreen}
  }

})
</script>

