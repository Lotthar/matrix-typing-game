<template>
  <q-select
    transition-show="jump-up"
    transition-hide="jump-up"
    class="q-mb-sm text-h6 text-primary text-center"
    color="info"
    bg-color="dark"
    dark
    dense
    input-style="text-primary"
    outlined
    :model-value="`${selectedOption}${optionSuffix}`"
    :options="options"
    popup-content-class="bg-dark text-primary text-center"
    hide-dropdown-icon
    options-selected-class="text-info"
    @update:model-value="onSelect"
  >
    <template v-slot:prepend>
      <q-avatar color="dark" text-color="primary" size="1.55em" :icon="icon" />
    </template>
    <template v-slot:no-option>
      <q-item>
        <q-item-section class="text-italic text-grey">No options slot</q-item-section>
      </q-item>
    </template>
    <q-tooltip
      class="bg-dark text-primary text-subtitle1"
      :hide-delay="1"
      anchor="center right"
      transition-show="jump-down"
      transition-hide="jump-up"
      :transition-duration="400"
    >{{ toolTip }}</q-tooltip>
  </q-select>
</template>
<script>
import { defineComponent,ref } from 'vue';

export default defineComponent({
  props: {
    options: {
      default: []
    },
    option: {
      type: Number,
      default: 30
    },
    toolTip : {
      type: String,
      default: "Choose option"
    },
    optionSuffix: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
    }
  },
  emits: ["update:model-value"],
  setup (props, context) {

    const selectedOption = ref(props.option);

    const onSelect = (value) => {
      selectedOption.value = value;
      context.emit("update:model-value", value);
    }

    return {selectedOption, onSelect}
  }

})
</script>
<style lang="scss" scoped>
.q-field__control-container {
  .q-field__native > span {
    color: $primary !important;
  }
}
</style>
