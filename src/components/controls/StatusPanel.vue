<template>
  <div class="column justify-start q-mt-sm text-primary">
    <h6 class="q-ma-none text-primary text-weight-bold">
      <q-icon class="q-mr-sm" color="primary" name="las la-poll" />Score:
      <span class="text-info text-weight-bolder text-h5">{{ score }}</span>
    </h6>
    <h6 class="q-ma-none text-primary text-weight-bold">
      <q-icon class="q-mr-sm" color="primary" name="las la-star" />Best Score:
      <span class="text-info text-weight-bolder text-h5">{{ bestScore }}</span>
    </h6>
    <h6 class="q-ma-none text-primary text-weight-bold">
      <q-icon class="q-mr-sm" color="primary" name="las la-stopwatch" />Time Remaining:
      <span class="text-warning text-weight-bolder text-h5">{{ timeRemaining }}s</span>
    </h6>
  </div>
</template>

<script>
import { defineComponent, toRefs } from 'vue';

export default defineComponent({
  props: {
    score: {
      type: Number,
      default: 0,
    },
    bestScore: {
      type: Number,
      default: 0,
    },
    timeRemaining: {
      type: Number,
      default: 0
    }
  },
  setup(props) {

    return {...toRefs(props)}
  }

})
</script>