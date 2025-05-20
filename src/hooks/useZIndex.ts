import { computed, ref } from 'vue'

const zIndex = ref(0)
const useZIndex = (initVal = 200) => {
  const initZIndex = ref(initVal)
  const currentZIndex = computed(() => zIndex.value + initZIndex.value)
  const nextZIndex = () => {
    zIndex.value++
    return currentZIndex.value
  }

  return {
    initZIndex,
    currentZIndex,
    nextZIndex,
  }
}

export default useZIndex
