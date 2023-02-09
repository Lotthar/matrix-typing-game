<template>
  <q-page class="q-ma-none flex flex-start bg-matrix">
    <initial-panel />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InitialPage',

  setup () {
    return {}
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
