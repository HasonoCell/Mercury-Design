import { onMounted, onBeforeUnmount, type Ref } from 'vue'

const useClickOutside = (el: Ref<undefined | HTMLElement>, callback: (e: MouseEvent) => void) => {
  const handler = (e: MouseEvent) => {
    if (e.target && el.value && !el.value.contains(e.target as HTMLElement)) {
      callback(e)
    }
  }

  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onBeforeUnmount(() => {
    document.removeEventListener('click', handler)
  })
}

export default useClickOutside
