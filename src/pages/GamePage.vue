<template>
  <q-page class="`q-ma-none flex flex-start bg-black">
    <game-panel />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GamePage',

  setup () {
    return {}
  }
})
</script>
<style lang="scss" scoped>
.q-page {
  height: 70vh;
}
</style>
