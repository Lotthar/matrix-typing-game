<template>
  <q-badge
    @animation-end="isFalling.value = false"
    :style="{ left: `calc(${positionStyle}vw)`, color: color }"
    :class="`q-ma-none q-pa-none q-pl-sm q-pr-sm ${fallingClass} ${speedClass}`"
  >{{ word }}</q-badge>>
</template>

<script>
import useWords from 'src/service/useWords';
import { defineComponent,onMounted, computed, ref } from 'vue';
import { getRandomWordColor } from "src/service/util";


export default defineComponent({
  props: {
    word: {
      type: String,
      default: "ERROR"
    },
    speed: {
      type: Number,
      default: 3
    }
  },
  setup(props) {

    const { getRandomWordPosition, removeWordFromScreen } = useWords();

    const isFalling = ref(true);
    const position = ref(getRandomWordPosition());
    const color = ref(getRandomWordColor());

    onMounted(() => removeAfterFall());

    const positionStyle = computed(() => {
      if(100 - position.value < 12) return 88;
      else return `${100 - position.value}`;
    });

    const removeAfterFall = () => setTimeout(() => {
        isFalling.value = false;
    }, 1000 * props.speed);

    const fallingClass = computed(() => {
      return isFalling.value ? 'falling' : 'not-falling';
    })


    const speedClass = computed(() => {
      switch (props.speed) {
        case 12:
          return "sec12";
        case 9:
          return "sec9";
        case 6:
          return "sec6";
        case 3:
          return "sec3";
        default:
          return "sec12";
      }
    });

    return {speedClass, fallingClass, positionStyle, color }

  }

})
</script>

<style lang="scss" scoped>
.q-badge {
  border: none;
  background: black;
  font-size: 15px;
  font-weight: bold;
}
.not-falling {
  visibility: hidden;
}
.falling {
  position: absolute;
  animation-name: falling-word;
  animation-timing-function: linear;
  animation-iteration-count: 1;
}

.sec12 {
  -webkit-animation-duration: 12s;
  animation-duration: 12s;
}

.sec9 {
  -webkit-animation-duration: 9s;
  animation-duration: 9s;
}

.sec6 {
  -webkit-animation-duration: 6s;
  animation-duration: 6s;
}

.sec3 {
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
}

@keyframes falling-word {
  from {
    visibility: visible;
    transform: translateY(0);
  }
  to {
    transform: translateY(72vh);
    visibility: hidden;
  }
}
</style>