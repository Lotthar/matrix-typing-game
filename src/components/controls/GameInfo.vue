<template>
  <div class="column justify-start text-primary">
    <h6 class="q-ma-none q-mb-sm text-primary text-weight-bold">
      <q-icon class="q-mr-sm" color="primary" name="las la-user-tie" />
      <span class="text-info text-weight-bolder text-h5">{{ user }}</span>
    </h6>
    <q-btn
      dense
      class="text-weight-bolder text-h5 q-pr-sm q-mb-sm"
      glossy
      color="primary"
      size="md"
      outline
      @click="onRestart"
    >
      <q-icon class="q-pr-sm" left size="2.3em" color="info" name="las la-redo-alt" />
      <div>Restart</div>
    </q-btn>
    <q-btn
      dense
      class="text-weight-bolder text-h5 q-pr-sm q-mb-sm"
      glossy
      color="primary"
      size="md"
      outline
      @click="onNewGame"
    >
      <q-icon left size="2.3em" color="info" name="las la-power-off" />
      <div>New Game</div>
    </q-btn>
  </div>
</template>

<script>
import { defineComponent,ref} from 'vue';
import { useGameStore } from "stores/game";
import { useWordStore } from "stores/words";
import { storeToRefs } from "pinia";

export default defineComponent({

  setup() {

    const gameStore = useGameStore();
    const wordStore = useWordStore();

    const { startGame, gameFinished, onNewGame } = gameStore;
    const { resetScreenWords, addNewWordToScreen } = wordStore;
    const {  } = storeToRefs(gameStore);
    
    const user = ref("Branko");

    const onRestart = () => {
      gameFinished(resetScreenWords);
      startGame(resetScreenWords,addNewWordToScreen)
    }

    return { user,onNewGame, onRestart}
  }
})
</script>