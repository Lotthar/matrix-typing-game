<template>
  <div class="column content-center">
    <h6 class="text-primary text-weight-bold q-ma-sm q-mt-lg">Enter falling word and press "Enter"</h6>
    <q-input
      :input-style="{ color: 'white', fontWeight: 'bolder', fontSize: '15px'}"
      dense
      outlined
      :readonly="readonly"
      bg-color="dark"
      color="primary"
      v-model="wordInput"
      @keyup="onEnter"
    >
      <template v-slot:prepend>
        <q-icon color="primary" name="las la-angle-double-right" />
      </template>
    </q-input>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    readonly: {
      type: Boolean,
      default: false
    }
  },  
  emits: ["onEnter"],
  setup(_, context) {

    const wordInput = ref(null);

    const onEnter = (event) => {
        if(event.key === 'Enter') {
          context.emit("onEnter", wordInput)
          wordInput.value = "";
        }
    }

    return { wordInput, onEnter }
  }
})
</script>