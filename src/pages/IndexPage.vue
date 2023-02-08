<template>
  <q-page class="q-ma-none flex flex-start">
    <game-panel />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',

  setup () {
    return {}
  }
})
</script>
<style lang="scss" scoped>
.q-page {
  // background: url("/pozadina.gif");
  background: black;
  height: 70vh;
}
</style>
