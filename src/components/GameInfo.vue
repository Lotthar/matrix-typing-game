<template>
  <div class="column q-mt-lg justify-center text-primary">
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
import { useUser } from 'src/service/util';

export default defineComponent({

  setup() {

    const gameStore = useGameStore();
    const wordStore = useWordStore();
    const { deleteUser } = useUser();

    const { startGame, gameFinished, newGame } = gameStore;
    const { resetScreenWords, addNewWordToScreen } = wordStore;
    const {  } = storeToRefs(gameStore);
    
    const onNewGame = () => {
      gameFinished(resetScreenWords);
      deleteUser();
      newGame("GamePage");
    }

    const onRestart = () => {
      gameFinished(resetScreenWords);
      startGame(resetScreenWords,addNewWordToScreen)
    }

    return { onNewGame, onRestart}
  }
})
</script>