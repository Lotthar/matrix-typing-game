<template>
  <q-page class="q-ma-none flex flex-start bg-matrix">
    <div class="column fixed-center">
      <!--  -->
      <h3 class="text-primary text-center q-ma-none">-Welcome to New Game-</h3>
      <!-- <h3 class="text-primary text-center q-ma-none q-mt-md q-mb-md">Enter your player name</h3> -->
      <q-input
        :input-style="{ color: '#77c977', fontWeight: 'bold', fontSize: '30px'}"
        outlined
        bg-color="dark"
        v-model="usernameRef"
        label="Enter your player name"
        label-color="primary"
        @keyup.enter="onEnter"
      >
        <template v-slot:prepend>
          <q-icon color="primary" name="las la-angle-double-right" />
        </template>
      </q-input>
    </div>
  </q-page>
</template>

<script>
import { defineComponent,onMounted } from 'vue';
import { useUser } from "src/service/util";
import { useGameStore } from 'src/stores/game';
import { useWordStore } from 'src/stores/words';


export default defineComponent({

  setup() {

    const gameStore = useGameStore();
    const wordStore = useWordStore();
    const { newGame } = gameStore;
    const { loadAllWords, addNewWordToScreen, resetScreenWords } = wordStore;

    const { newUser,loadSavedUser, usernameRef} = useUser();

    onMounted(() => {
      loadSavedUser();
      console.log(usernameRef.value);
      if(usernameRef.value != null) onEnter();
    })

    const onEnter = () => {
      console.log("New game starting...")
      newGame("InitialPage", newUser, resetScreenWords, addNewWordToScreen, loadAllWords);
    }

    return {onEnter, usernameRef}
  }

})
</script>
<style lang="scss" scoped>
.bg-matrix {
  background: url("/pozadina.gif");
}
.q-page {
  height: 70vh;
}
</style>
