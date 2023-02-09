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

    <q-footer v-if="showControlls">
      <controlls-panel />
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, watch, ref } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'MainLayout',

  setup () {

    const showControlls = ref(false);

    const route = useRoute()

    watch(() => route.path,
      newPath => {
        if(newPath.includes("game")) {
          showControlls.value = true;
        } else {
          showControlls.value = false;
        }
      }
    )

    return { showControlls }

  }
})
</script>
<style lang="scss" scoped>
.q-header {
  background: linear-gradient(to top, $secondary, $dark-page);
  box-shadow: 0px 5px 27px 1px rgba(0, 112, 0, 0.86);
}
.q-footer {
  box-shadow: 0px -5px 27px 1px rgba(0, 112, 0, 0.86);
  background: linear-gradient(to bottom, $secondary, $dark-page);
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
