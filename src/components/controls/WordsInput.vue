<template>
  <div class="column content-center">
    <h6 class="text-primary q-ma-sm q-mt-md">Enter falling word and press "Enter"</h6>
    <q-input
      :input-style="{ color: 'green', fontWeight: 'bold', fontSize: '15px'}"
      dense
      outlined
      bg-color="dark"
      color="primary"
      v-model="wordInput"
      @keyup="onKeyUp"
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
  emits: ["onEnterWord"],
  setup(props, context) {

    const wordInput = ref(null);

    const onKeyUp = (event) => {
        if(event.key === 'Enter') {
          context.emit("onEnterWord", wordInput)
          wordInput.value = "";
        }
    }

    return { wordInput, onKeyUp }
  }
})
</script>