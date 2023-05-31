<template>
  <q-badge
    :style="{ left: `calc(${positionStyle}vw)`, color: word.active ? wordColor : 'black' }"
    :class="`q-ma-none q-pa-none q-pl-sm q-pr-sm speedX${speed} ${fallingClass}`"
  >{{ word.word }}</q-badge>>
</template>

<script>
import { defineComponent,onMounted, computed, ref } from 'vue';
import { getRandomWordColor, getRandomWordPosition } from "src/service/util";
import { useWordStore } from "stores/words";

export default defineComponent({
  props: {
    word: {
      type: Object
    },
    speed: {
      type: Number,
      default: 3
    }
  },
  setup(props) {

    const wordStore = useWordStore();
    const { removeWordFromScreen } = wordStore;

    const isFalling = ref(true);
    const word = ref(props.word);
    const position = ref(getRandomWordPosition());
    const wordColor = ref(getRandomWordColor());

    onMounted(() => removeAfterFall());

    const positionStyle = computed(() => {
      let calcPosition = 100 - position.value;
      if(calcPosition < 12) return 88;
      else return calcPosition;
    });

    const removeAfterFall = () =>
      setTimeout(() => {
        isFalling.value = false;
        word.value.active = false;
        removeWordFromScreen(word.value.word)
    }, 11000 - (1000 * props.speed));

    const fallingClass = computed(() => {
      return isFalling.value || word.value.active ? 'falling' : 'not-falling';
    })

    return { isFalling, fallingClass, positionStyle, wordColor }

  }

})
</script>

<style lang="scss" scoped>
.q-badge {
  border: none;
  background: black;
  font-size: 21px;
  font-weight: bold;
}
.not-falling {
  visibility: none;
  color: "black";
  transition: none;
}
.falling {
  position: absolute;
  animation-name: falling-word;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  transition: color 0.4s ease-in-out;
}

.speedX1 {
  -webkit-animation-duration: 10s;
  animation-duration: 10s;
}

.speedX2 {
  -webkit-animation-duration: 9s;
  animation-duration: 9s;
}

.speedX3 {
  -webkit-animation-duration: 8s;
  animation-duration: 8s;
}

.speedX4 {
  -webkit-animation-duration: 7s;
  animation-duration: 7s;
}
.speedX5 {
  -webkit-animation-duration: 6s;
  animation-duration: 6s;
}
.speedX6 {
  -webkit-animation-duration: 5s;
  animation-duration: 5s;
}
.speedX7 {
  -webkit-animation-duration: 4s;
  animation-duration: 4s;
}

@keyframes falling-word {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(80vh);
    display: none;
  }
}
</style>
