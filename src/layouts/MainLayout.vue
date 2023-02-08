<template>
  <q-layout view="hHr LpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>The Matrix</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <controlls-panel />
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {}
})
</script>
<style lang="scss" scoped>
.q-header {
  background: linear-gradient(to bottom, $secondary, $dark-page);
}
.q-footer {
  box-shadow: 0px 5px 27px 1px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to top, $secondary, $dark-page);
}
.q-toolbar {
  box-shadow: 0px 5px 27px 1px rgba(1, 19, 1, 0.86);
  .q-toolbar__title {
    text-align: center;
    font-weight: bolder;
    color: $primary;
    font-size: 3rem;
  }
}
</style>
